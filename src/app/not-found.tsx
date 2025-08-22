'use client';

import Link from 'next/link';
import { CSSProperties } from 'react';

export default function NotFound() {
  const pageContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f0f2f5',
    color: '#333',
    fontFamily: 'sans-serif',
    padding: '2rem',
  };

  const title: CSSProperties = {
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#0070f3',
  };

  const heading: CSSProperties = {
    fontSize: '2rem',
    margin: '1rem 0',
  };

  const text: CSSProperties = {
    fontSize: '1.25rem',
    margin: '0.5rem 0 2rem 0',
    maxWidth: '600px',
  };

  const slogan: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '2rem 0',
    color: '#555',
  };

  const linkStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const linkHoverStyle: CSSProperties = {
    backgroundColor: '#005bb5',
  };

  return (
    <div style={pageContainer}>
      <h1 style={title}>Ooops!</h1>
      <h2 style={heading}>Page Not Found</h2>
      <p style={text}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>

      <p style={slogan}>
        What you&apos;re looking for doesn&apos;t exist yet? We can create it for you!
      </p>

      <Link href="/">
        <div 
          style={linkStyle}
          onMouseEnter={e => Object.assign(e.currentTarget.style, linkHoverStyle)}
          onMouseLeave={e => Object.assign(e.currentTarget.style, linkStyle)}
        >
          Go Back Home
        </div>
      </Link>
    </div>
  );
}