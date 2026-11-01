import { CURRENT_VERSION } from '../site'

type TagBadgeProps = {
    major: number
    minor: number
    patch: number
}

export function TagBadge({ major, minor, patch }: TagBadgeProps) {
    if (major < CURRENT_VERSION.major) return null
    if (major === CURRENT_VERSION.major && minor < CURRENT_VERSION.minor - 1) return null

    return (
        <span
            style={{
                marginLeft: '0.5rem',
                padding: '0.2em 0.5em',
                fontSize: '0.75em',
                borderRadius: '4px',
                backgroundColor: '#eef2ff',
                color: '#3730a3',
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
            }}
        >
      v{major}.{minor}.{patch}
    </span>
    )
}
