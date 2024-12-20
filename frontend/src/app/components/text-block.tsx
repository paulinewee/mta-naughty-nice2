'use client'

interface Props {
  overline: string
  color: string
  header: string
  description: string
}

const TextBlock: React.FC<Props> = ({
  overline,
  color,
  header,
  description,
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className={`py-1 px-2 ${color} border-black border-2 mb-6`}>
        <h4 className="text-sm font-mono inline tracking-tight">{overline}</h4>
      </div>
      <h1 className="text-[3vw] max-[500px]:text-2xl font-bold tracking-tight mb-2 leading-tight">
        Rank {header} / 21
      </h1>
      <p className="text-l leading-tight p-0">{description}</p>
    </div>
  )
}

export default TextBlock
