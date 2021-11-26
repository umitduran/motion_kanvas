import * as React from 'react'

function TezosLogo(sx: any, props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={sx}
            fill="none"
            viewBox="0 0 227 283"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={4}
                className="prefix__transform-gpu prefix__scale-20"
                d="M175.8 171.2c-2.3-40.7-53.5-59.2-58.4-61.1-.2-.1-.2-.3-.1-.5l52.8-53v-5.7c0-.9-.8-1.7-1.7-1.7H71.1V7.7l-35.9 7.5v5.4h2s8.8 0 8.8 8.8v19.7H18.2c-.5 0-1 .5-1 1v12.5h28.9v67.9c0 21.3 13.7 36.1 37.7 34.1 5.1-.4 9.8-2.4 13.8-5 1.8-1.2 2.9-3.1 2.9-5.3v-6.7c-7.8 5.2-14.4 4.9-14.4 4.9-15.2 0-14.9-19.3-14.9-19.3V62.6h70l-50.4 50.8c-.1 6.7-.2 11.9-.2 12 0 .2.1.3.3.3 46.2 7.8 58.7 37.7 58.7 46.4 0 0 5 42.3-37.3 45.2 0 0-27.7 1.2-32.6-9.9-.2-.4 0-.8.4-1 4.6-2.1 7.7-6.2 7.7-11.7 0-8.2-5-14.9-15.5-14.9-8.5 0-15.5 6.7-15.5 14.9 0 0-4 35.6 55.4 34.6 67.8-1.2 63.6-58.1 63.6-58.1z"
            />
        </svg>
    )
}

export default TezosLogo
