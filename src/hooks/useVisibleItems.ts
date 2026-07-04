import { useState } from 'react'

type UseVisibleItemsOptions = {
  initialVisibleItems?: number
  visibleItemIncrement?: number
}

export const useVisibleItems = <T>(
  items: readonly T[],
  options?: UseVisibleItemsOptions,
) => {
  const [visibleCount, setVisibleCount] = useState(
    options?.initialVisibleItems ?? 2,
  )
  const visibleItems = items.slice(0, visibleCount)
  const hiddenCount = items.length - visibleItems.length
  const nextVisibleCount = Math.min(
    hiddenCount,
    options?.visibleItemIncrement ?? 5,
  )

  const showMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(
        items.length,
        currentCount + (options?.visibleItemIncrement ?? 5),
      ),
    )
  }

  return { hiddenCount, nextVisibleCount, showMore, visibleItems }
}
