export function TagBadge({ children }) {
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
      {children}
    </span>
    )
}
