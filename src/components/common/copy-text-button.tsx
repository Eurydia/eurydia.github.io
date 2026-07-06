import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'

const defaultCopiedFeedbackDurationMs = 1500

export const CopyTextButton: FC<{
  text: string
  copiedFeedbackDurationMs?: number
  children: ReactNode
}> = (props) => {
  const [isCopied, setIsCopied] = useState(false)
  const feedbackTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        window.clearTimeout(feedbackTimeoutRef.current)
      }
    }
  }, [])

  const handleClick = () => {
    void navigator.clipboard.writeText(props.text)
    setIsCopied(true)

    if (feedbackTimeoutRef.current) {
      window.clearTimeout(feedbackTimeoutRef.current)
    }

    feedbackTimeoutRef.current = window.setTimeout(() => {
      setIsCopied(false)
    }, props.copiedFeedbackDurationMs ?? defaultCopiedFeedbackDurationMs)
  }

  return (
    <Tooltip title={'Copied!'} open={isCopied}>
      <IconButton color="primary" onClick={handleClick}>
        {props.children}
      </IconButton>
    </Tooltip>
  )
}
