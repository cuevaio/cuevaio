import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '50px',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>👋</div>
        <div style={{ color: 'black' }}>Schedule a Meeting</div>
        <div style={{ color: '#666', fontSize: 40, marginTop: 20 }}>with Anthony</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
} 