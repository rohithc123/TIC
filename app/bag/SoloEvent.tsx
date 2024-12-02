'use client'

import man from '@/public/man.svg'
import trash from '@/public/trash.svg'
import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { events } from '../events/eventInfo'

export default function SoloEvent({
  eventCode,
  deleteHandler,
}: {
  eventCode: string
  deleteHandler: MouseEventHandler
}) {
  const ev = events.get(eventCode)!
  return (
    <div
      id={eventCode}
      className="flex gap-3 w-full bg-void-700 border-[1px] border-void-500 px-4 py-6 rounded-lg mt-4 items-center"
    >
      {/* Icon Round */}
      <div className="grid place-content-center h-14 w-14 bg-void-500 border-[1px] border-void-300 rounded-full">
        <Image src={`/icons/${eventCode}.png`} width={32} height={32} alt="" />
      </div>

      {/* Title */}
      <div className="flex-grow">
        <h4 className="text-2xl w-[12ch] md:w-[22ch] truncate">{ev.name}</h4>
        <div className="flex gap-1">
          <Image src={man} width={24} height={24} alt="" />
          Solo
        </div>
      </div>

      {/* Price */}
      <div className="text-2xl">₹{ev.fee.amount}</div>

      {/* Delete Button */}
      <Image
        src={trash}
        width={24}
        height={24}
        className="cursor-pointer"
        alt=""
        onClick={deleteHandler}
      />
    </div>
  )
}
