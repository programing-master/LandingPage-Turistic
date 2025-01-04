import Image from 'next/image'
import React from 'react'

type buttonProps = {
  type: 'button' | 'submit'
  title: string
  variant: string
  icon: string
}

export default function Button ({ type, title, icon, variant }: buttonProps) {
  return (
    <button
      type={type}
      title={title}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={"icon"} width={24} height={24}></Image>}
      <label>{title}</label>
    </button>
  )
}
