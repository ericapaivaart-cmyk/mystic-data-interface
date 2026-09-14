import { cn } from '@/lib/utils'

type LogoMarkProps = {
  className?: string
  title?: string
}

/**
 * Data Astral brand mark: a "D" with a shooting-star cutout.
 * The star is negative space (transparent), so it reveals whatever surface
 * sits behind it — solid color over the void, per the Mystic Data system.
 * Fills with currentColor so it themes automatically.
 */
export function LogoMark({ className, title = 'Data Iris' }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 1080 1080"
      className={cn('h-7 w-7', className)}
      role="img"
      aria-label={title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M573.1,257.3H281.2l214,151.6c9.8,3.3,20.5,1.6,28.8-4.6l59.6-44.5c20.8-15.5,50.4-0.5,50.1,25.5l-1,74.4c-0.1,10.3,4.8,20,13.2,26l60.7,42.9c21.2,15,16,47.8-8.8,55.5l-71,22.1c-9.9,3.1-17.6,10.8-20.6,20.6l-22.1,71c-7.7,24.8-40.5,30-55.5,8.8L485.7,646c-6-8.4-15.7-13.4-26-13.2l-74.4,1c-26,0.3-41.1-29.3-25.5-50.1l44.5-59.6c6.2-8.3,7.9-19,4.6-28.8L263.8,292c0,145,0,528.8-0.1,530.7h309.4c134.1,0,243.2-103.3,243.2-230.3V487.5C816.3,360.7,707.2,257.3,573.1,257.3z"
      />
    </svg>
  )
}

type LogoProps = {
  className?: string
  markClassName?: string
  showWordmark?: boolean
}

/** Full lockup: mark + wordmark. Use showWordmark={false} for the mark alone. */
export function Logo({ className, markClassName, showWordmark = true }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <LogoMark className={cn('h-7 w-7 text-foreground', markClassName)} />
      {showWordmark ? (
        <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
          Data Iris
        </span>
      ) : null}
    </span>
  )
}
