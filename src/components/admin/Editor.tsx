"use client";

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, List, ListOrdered, Heading2, Quote, Undo, Redo } from 'lucide-react'

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200 rounded-t-lg">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('bold') ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('italic') ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Italic"
      >
        <Italic size={18} />
      </button>
      
      <div className="w-px h-6 bg-gray-300 mx-1"></div>
      
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('bulletList') ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('orderedList') ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Ordered List"
      >
        <ListOrdered size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 rounded hover:bg-gray-200 transition ${editor.isActive('blockquote') ? 'bg-gray-200 text-[#C8102E]' : 'text-gray-700'}`}
        type="button"
        title="Quote"
      >
        <Quote size={18} />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1"></div>

      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-2 rounded text-gray-700 hover:bg-gray-200 disabled:opacity-50 transition"
        type="button"
        title="Undo"
      >
        <Undo size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-2 rounded text-gray-700 hover:bg-gray-200 disabled:opacity-50 transition"
        type="button"
        title="Redo"
      >
        <Redo size={18} />
      </button>
    </div>
  )
}

export default function TipTapEditor({ 
  content, 
  onChange 
}: { 
  content: string; 
  onChange: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        }
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[300px] p-4 bg-white rounded-b-lg border border-t-0 border-gray-200',
      },
    },
  })

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
