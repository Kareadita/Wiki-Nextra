import { useEffect } from 'react'
import { useRouter } from 'next/router'

type RedirectProps = {
    to: string
}

// The site is a static export, so there are no server redirects
export function Redirect({ to }: RedirectProps) {
    const router = useRouter()

    useEffect(() => {
        router.replace(to + window.location.hash)
    }, [router, to])

    return (
        <p>
            This page has moved to <a href={to}>{to}</a>.
        </p>
    )
}
