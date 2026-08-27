import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Gopal Ahuja | Strategic Real Estate Advisory'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1830', // Midnight Navy
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: '84px',
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          Gopal Ahuja
        </div>
        <div
          style={{
            fontSize: '48px',
            color: '#D4AF37', // Gold
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          Strategic Real Estate Advisory
        </div>
        <div
          style={{
            fontSize: '32px',
            color: '#9CA3AF',
            lineHeight: 1.4,
            maxWidth: '900px',
          }}
        >
          Independent market analysis, private portfolio advisory, and capital allocation insights for high-net-worth real estate investors.
        </div>
        
        <div
          style={{
            marginTop: 'auto',
            width: '120px',
            height: '8px',
            background: '#C8102E', // Action Red
            borderRadius: '4px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
