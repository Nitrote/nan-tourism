'use client'

import { useState, useRef, useEffect, ChangeEvent } from 'react'

interface Post {
  id: string
  imageDataUrl: string
  caption: string
  isPlanned: boolean
  timestamp: number
}

interface ProfileData {
  username: string
  displayName: string
  bio: string
  website: string
  avatarDataUrl: string
  followersCount: string
  followingCount: string
}

const POSTS_KEY = 'igp-posts-v2'
const PROFILE_KEY = 'igp-profile-v2'

const DEFAULT_PROFILE: ProfileData = {
  username: 'username',
  displayName: '',
  bio: '',
  website: '',
  avatarDataUrl: '',
  followersCount: '0',
  followingCount: '0',
}

async function compressImage(file: File, maxWidth = 1080): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = ({ target }) => {
      const img = new Image()
      img.onload = () => {
        let { width, height } = img
        if (width > maxWidth) { height = (height / width) * maxWidth; width = maxWidth }
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        canvas.getContext('2d')!.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', 0.85))
      }
      img.onerror = reject
      img.src = target!.result as string
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// ─── Avatar ────────────────────────────────────────────────────────────────

function Avatar({
  src,
  size = 56,
  onClick,
}: {
  src: string
  size?: number
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden bg-gray-200 flex-shrink-0 border-2 border-gray-300 focus:outline-none"
    >
      {src ? (
        <img src={src} alt="avatar" className="w-full h-full object-cover" />
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 w-full h-full p-1.5">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )}
    </button>
  )
}

// ─── Post modal ─────────────────────────────────────────────────────────────

function PostModal({
  post,
  onSave,
  onDelete,
  onClose,
}: {
  post: Post
  onSave: (p: Post) => void
  onDelete: (id: string) => void
  onClose: () => void
}) {
  const [caption, setCaption] = useState(post.caption)
  const [isPlanned, setIsPlanned] = useState(post.isPlanned)
  const [imageDataUrl, setImageDataUrl] = useState(post.imageDataUrl)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const dataUrl = await compressImage(file)
    setImageDataUrl(dataUrl)
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[300] flex flex-col justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl max-h-[92vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-1" />

        {/* Image */}
        <div className="mx-4 mt-3 aspect-square bg-gray-100 rounded-xl overflow-hidden">
          {imageDataUrl ? (
            <img src={imageDataUrl} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 opacity-40">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              <span className="text-sm">No image</span>
            </div>
          )}
        </div>

        <div className="px-4 py-4 space-y-3 pb-10">
          <button
            onClick={() => fileRef.current?.click()}
            className="w-full py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 active:bg-gray-50"
          >
            {imageDataUrl ? 'Change image' : 'Add image'}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />

          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
              Caption
            </div>
            <textarea
              value={caption}
              onChange={e => setCaption(e.target.value)}
              rows={3}
              placeholder="Write a caption..."
              className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:border-gray-400"
            />
          </div>

          {/* Planned toggle */}
          <div className="flex items-center justify-between py-1">
            <div>
              <div className="text-sm font-medium">Mark as planned</div>
              <div className="text-xs text-gray-500">Post not published yet</div>
            </div>
            <button
              onClick={() => setIsPlanned(v => !v)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 flex-shrink-0 ${
                isPlanned ? 'bg-purple-500' : 'bg-gray-200'
              }`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                  isPlanned ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => onSave({ ...post, caption, isPlanned, imageDataUrl })}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold text-sm active:bg-gray-800"
          >
            Save
          </button>
          <button
            onClick={() => {
              if (confirm('Delete this post?')) onDelete(post.id)
            }}
            className="w-full py-2 text-red-500 text-sm font-medium"
          >
            Delete post
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Profile editor ──────────────────────────────────────────────────────────

function ProfileEditor({
  profile,
  onChange,
}: {
  profile: ProfileData
  onChange: (p: ProfileData) => void
}) {
  const avatarRef = useRef<HTMLInputElement>(null)

  const handleAvatarChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const dataUrl = await compressImage(file, 400)
    onChange({ ...profile, avatarDataUrl: dataUrl })
  }

  const set =
    (key: keyof ProfileData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange({ ...profile, [key]: e.target.value })

  return (
    <div className="px-4 pt-4 pb-12 space-y-4">
      <div className="flex flex-col items-center gap-2 py-4">
        <Avatar src={profile.avatarDataUrl} size={84} onClick={() => avatarRef.current?.click()} />
        <button
          onClick={() => avatarRef.current?.click()}
          className="text-blue-600 text-sm font-semibold"
        >
          Change profile photo
        </button>
        <input
          ref={avatarRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleAvatarChange}
        />
      </div>

      {(
        [
          { key: 'username', label: 'Username', placeholder: 'username' },
          { key: 'displayName', label: 'Display name', placeholder: 'Your name' },
          { key: 'website', label: 'Website', placeholder: 'yoursite.com' },
        ] as const
      ).map(({ key, label, placeholder }) => (
        <label key={key} className="block">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {label}
          </span>
          <input
            value={profile[key]}
            onChange={set(key)}
            placeholder={placeholder}
            className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white"
          />
        </label>
      ))}

      <label className="block">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Bio</span>
        <textarea
          value={profile.bio}
          onChange={set('bio')}
          rows={3}
          placeholder="Bio..."
          className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm resize-none focus:outline-none focus:border-gray-400 bg-white"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        {(
          [
            { key: 'followersCount', label: 'Followers' },
            { key: 'followingCount', label: 'Following' },
          ] as const
        ).map(({ key, label }) => (
          <label key={key} className="block">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {label}
            </span>
            <input
              value={profile[key]}
              onChange={set(key)}
              placeholder="0"
              inputMode="numeric"
              className="w-full mt-1 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-gray-400 bg-white"
            />
          </label>
        ))}
      </div>
    </div>
  )
}

// ─── Import sheet ────────────────────────────────────────────────────────────

function ImportSheet({
  onImport,
  onPlan,
  onPlaceholder,
  onClose,
}: {
  onImport: (files: FileList) => void
  onPlan: (files: FileList) => void
  onPlaceholder: () => void
  onClose: () => void
}) {
  const importRef = useRef<HTMLInputElement>(null)
  const planRef = useRef<HTMLInputElement>(null)

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[200] flex flex-col justify-end"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl pb-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-4" />
        <div className="px-4 pb-2">
          <h3 className="font-semibold text-base mb-4">Add posts</h3>
          <div className="space-y-2">
            <button
              onClick={() => importRef.current?.click()}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 active:bg-gray-100 text-left"
            >
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-600">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm">Import existing posts</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Upload photos already on your feed
                </div>
              </div>
            </button>
            <input
              ref={importRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={e => {
                if (e.target.files?.length) onImport(e.target.files)
                e.target.value = ''
              }}
            />

            <button
              onClick={() => planRef.current?.click()}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 active:bg-gray-100 text-left"
            >
              <div className="w-11 h-11 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-500">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">Plan new post</span>
                  <span className="bg-purple-100 text-purple-600 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    draft
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Add a photo you're planning to post
                </div>
              </div>
            </button>
            <input
              ref={planRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={e => {
                if (e.target.files?.length) onPlan(e.target.files)
                e.target.value = ''
              }}
            />

            <button
              onClick={onPlaceholder}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50 active:bg-gray-100 text-left"
            >
              <div className="w-11 h-11 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-400">
                  <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm">Empty placeholder</span>
                  <span className="bg-purple-100 text-purple-600 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    draft
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Reserve a slot in your grid layout
                </div>
              </div>
            </button>
          </div>

          <div className="mt-4 p-3 bg-blue-50 rounded-xl text-xs text-blue-700 leading-relaxed">
            <strong>Tip:</strong> To get your existing posts, save each photo from
            Instagram (tap ··· → Copy link, then screenshot), or use Instagram&apos;s
            built-in &quot;Download your information&quot; in Settings to export your photos.
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 py-3 text-gray-500 text-sm font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main app ────────────────────────────────────────────────────────────────

export default function InstagramPlanner() {
  const [posts, setPosts] = useState<Post[]>([])
  const [profile, setProfile] = useState<ProfileData>(DEFAULT_PROFILE)
  const [tab, setTab] = useState<'feed' | 'profile'>('feed')
  const [editMode, setEditMode] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [showImport, setShowImport] = useState(false)

  // Drag state — use refs for current values accessible in closures
  const [dragIdx, _setDragIdx] = useState<number | null>(null)
  const [overIdx, _setOverIdx] = useState<number | null>(null)
  const [ghostPos, setGhostPos] = useState<{ x: number; y: number } | null>(null)
  const [ghostSize, setGhostSize] = useState(0)
  const dragIdxRef = useRef<number | null>(null)
  const overIdxRef = useRef<number | null>(null)
  const dragOffset = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  const setDragIdx = (v: number | null) => { dragIdxRef.current = v; _setDragIdx(v) }
  const setOverIdx = (v: number | null) => { overIdxRef.current = v; _setOverIdx(v) }

  // Load from storage
  useEffect(() => {
    try {
      const sp = localStorage.getItem(POSTS_KEY)
      const pr = localStorage.getItem(PROFILE_KEY)
      if (sp) setPosts(JSON.parse(sp))
      if (pr) setProfile(JSON.parse(pr))
    } catch {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem(POSTS_KEY, JSON.stringify(posts)) } catch {}
  }, [posts])

  useEffect(() => {
    try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)) } catch {}
  }, [profile])

  // Global pointer handlers for drag
  useEffect(() => {
    if (dragIdx === null) return

    const onMove = (e: PointerEvent) => {
      e.preventDefault()
      setGhostPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      })
      // Find which cell is under the cursor (ghost has pointer-events:none)
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null
      const cell = el?.closest('[data-post-index]') as HTMLElement | null
      if (cell) {
        const idx = parseInt(cell.dataset.postIndex!)
        if (!isNaN(idx)) setOverIdx(idx)
      }
    }

    const onUp = () => {
      isDragging.current = false
      const di = dragIdxRef.current
      const oi = overIdxRef.current
      if (di !== null && oi !== null && di !== oi) {
        setPosts(prev => {
          const arr = [...prev]
          const [item] = arr.splice(di, 1)
          arr.splice(oi, 0, item)
          return arr
        })
      }
      setDragIdx(null)
      setOverIdx(null)
      setGhostPos(null)
    }

    document.addEventListener('pointermove', onMove, { passive: false })
    document.addEventListener('pointerup', onUp)
    document.addEventListener('pointercancel', onUp)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerup', onUp)
      document.removeEventListener('pointercancel', onUp)
    }
  }, [dragIdx])

  const startDrag = (e: React.PointerEvent<HTMLDivElement>, index: number) => {
    if (!editMode) return
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    isDragging.current = true
    setGhostSize(rect.width)
    setGhostPos({ x: rect.left, y: rect.top })
    setDragIdx(index)
    setOverIdx(index)
  }

  const handleImport = async (files: FileList, planned = false) => {
    const newPosts: Post[] = []
    for (const file of Array.from(files)) {
      if (!file.type.startsWith('image/')) continue
      try {
        const dataUrl = await compressImage(file)
        newPosts.push({
          id: crypto.randomUUID(),
          imageDataUrl: dataUrl,
          caption: '',
          isPlanned: planned,
          timestamp: Date.now(),
        })
      } catch {}
    }
    // Planned posts go to the front, existing posts to the end
    setPosts(prev => planned ? [...newPosts, ...prev] : [...prev, ...newPosts])
    setShowImport(false)
  }

  const addPlaceholder = () => {
    setPosts(prev => [
      {
        id: crypto.randomUUID(),
        imageDataUrl: '',
        caption: '',
        isPlanned: true,
        timestamp: Date.now(),
      },
      ...prev,
    ])
    setShowImport(false)
  }

  const savePost = (updated: Post) => {
    setPosts(prev => prev.map(p => (p.id === updated.id ? updated : p)))
    setEditingPost(null)
  }

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(p => p.id !== id))
    setEditingPost(null)
  }

  const existingCount = posts.filter(p => !p.isPlanned).length
  const plannedCount = posts.filter(p => p.isPlanned).length

  return (
    // Fixed overlay so this covers the site's Navbar/Footer
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden">
      {/* Status bar spacer */}
      <div className="flex-shrink-0 h-[env(safe-area-inset-top,0px)]" />

      {/* Top bar */}
      <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="font-bold text-base tracking-tight">
          {tab === 'feed' ? (profile.username || 'Feed Preview') : 'Edit Profile'}
        </span>
        <div className="flex items-center gap-2">
          {tab === 'feed' && (
            <>
              <button
                onClick={() => setEditMode(v => !v)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  editMode
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {editMode ? 'Done' : 'Reorder'}
              </button>
              <button
                onClick={() => setShowImport(true)}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
              </button>
            </>
          )}
        </div>
      </header>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        {tab === 'feed' ? (
          <>
            {/* Profile header */}
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-start gap-5">
                <Avatar src={profile.avatarDataUrl} size={76} onClick={() => setTab('profile')} />
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex gap-5">
                    {[
                      { label: 'posts', value: existingCount },
                      { label: 'followers', value: profile.followersCount || '0' },
                      { label: 'following', value: profile.followingCount || '0' },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center">
                        <div className="font-bold text-sm leading-tight">{value}</div>
                        <div className="text-xs text-gray-500 leading-tight">{label}</div>
                      </div>
                    ))}
                  </div>
                  {plannedCount > 0 && (
                    <div className="mt-2 inline-flex items-center gap-1 text-xs text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full font-medium">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {plannedCount} planned {plannedCount === 1 ? 'post' : 'posts'}
                    </div>
                  )}
                </div>
              </div>
              {(profile.displayName || profile.bio || profile.website) && (
                <div className="mt-3 text-sm">
                  {profile.displayName && (
                    <div className="font-semibold">{profile.displayName}</div>
                  )}
                  {profile.bio && (
                    <div className="text-gray-700 whitespace-pre-line mt-0.5">{profile.bio}</div>
                  )}
                  {profile.website && (
                    <div className="text-blue-900 font-semibold mt-0.5">{profile.website}</div>
                  )}
                </div>
              )}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => setTab('profile')}
                  className="flex-1 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 active:bg-gray-50"
                >
                  Edit profile
                </button>
                <button
                  onClick={() => setShowImport(true)}
                  className="flex-1 py-1.5 border border-gray-300 rounded-lg text-xs font-semibold text-gray-700 active:bg-gray-50"
                >
                  Add posts
                </button>
              </div>
            </div>

            {/* Tab-style row strip */}
            <div className="flex border-b border-gray-200 mb-px">
              <button className="flex-1 py-2.5 flex items-center justify-center border-b-2 border-black">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
                </svg>
              </button>
            </div>

            {/* Grid */}
            {posts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center px-8">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-300">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-700">No posts yet</p>
                <p className="text-sm text-gray-400 mt-1">
                  Tap the + button above to add your photos
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-px bg-gray-200">
                {posts.map((post, index) => {
                  const isBeingDragged = dragIdx === index
                  const isDropTarget = overIdx === index && dragIdx !== null && dragIdx !== index

                  return (
                    <div
                      key={post.id}
                      data-post-index={index}
                      style={{ touchAction: editMode ? 'none' : 'auto' }}
                      className={`aspect-square bg-white relative overflow-hidden select-none
                        ${isBeingDragged ? 'opacity-25' : ''}
                        ${isDropTarget ? 'ring-2 ring-inset ring-blue-500 brightness-90' : ''}
                        ${editMode ? 'cursor-grab' : 'cursor-pointer'}
                      `}
                      onPointerDown={e => startDrag(e, index)}
                      onClick={() => {
                        if (!editMode && !isDragging.current) setEditingPost(post)
                      }}
                    >
                      {post.imageDataUrl ? (
                        <img
                          src={post.imageDataUrl}
                          alt=""
                          className="w-full h-full object-cover pointer-events-none"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-50">
                          <div className="flex flex-col items-center gap-1 opacity-40">
                            <div className="w-8 h-8 border-2 border-dashed border-gray-400 rounded" />
                          </div>
                        </div>
                      )}

                      {/* Planned indicator dot */}
                      {post.isPlanned && (
                        <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-purple-500 rounded-full ring-1 ring-white" />
                      )}

                      {/* Drag handle in edit mode */}
                      {editMode && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black/20 rounded-full p-1.5">
                            <svg
                              viewBox="0 0 24 24"
                              fill="white"
                              className="w-4 h-4"
                            >
                              <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        ) : (
          <ProfileEditor profile={profile} onChange={setProfile} />
        )}
      </div>

      {/* Bottom nav */}
      <div className="flex-shrink-0 border-t border-gray-100 flex bg-white">
        {(
          [
            {
              key: 'feed',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
                </svg>
              ),
            },
            {
              key: 'profile',
              icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              ),
            },
          ] as const
        ).map(({ key, icon }) => (
          <button
            key={key}
            onClick={() => { setTab(key); if (key === 'feed') {} }}
            className={`flex-1 py-3 flex items-center justify-center transition-colors ${
              tab === key ? 'text-black' : 'text-gray-300'
            }`}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Safe area bottom */}
      <div
        className="flex-shrink-0 bg-white"
        style={{ height: 'env(safe-area-inset-bottom, 0px)' }}
      />

      {/* Import bottom sheet */}
      {showImport && (
        <ImportSheet
          onImport={files => handleImport(files, false)}
          onPlan={files => handleImport(files, true)}
          onPlaceholder={addPlaceholder}
          onClose={() => setShowImport(false)}
        />
      )}

      {/* Post editor modal */}
      {editingPost && (
        <PostModal
          post={editingPost}
          onSave={savePost}
          onDelete={deletePost}
          onClose={() => setEditingPost(null)}
        />
      )}

      {/* Drag ghost */}
      {dragIdx !== null && ghostPos && posts[dragIdx] && (
        <div
          style={{
            position: 'fixed',
            left: ghostPos.x,
            top: ghostPos.y,
            width: ghostSize,
            height: ghostSize,
            pointerEvents: 'none',
            zIndex: 9999,
            opacity: 0.9,
            transform: 'scale(1.06)',
            borderRadius: 6,
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
          }}
        >
          {posts[dragIdx].imageDataUrl ? (
            <img
              src={posts[dragIdx].imageDataUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-dashed border-gray-400 rounded" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
