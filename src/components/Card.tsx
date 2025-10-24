import React from "react"

export default function Card({
  title,
  description,
  image,
  children,
}: {
  title: string
  description: string
  image?: string
  children?: React.ReactNode
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-4 flex flex-col gap-2">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded mb-2 w-full aspect-video object-cover"
        />
      )}
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-slate-700 dark:text-slate-300">{description}</p>
      {children}
    </div>
  )
}
