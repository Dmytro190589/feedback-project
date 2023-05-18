import { FC } from 'react';

export const Suggestions: FC = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '56px',
          background: '#373F68',
          marginBottom: '32px',
        }}
      ></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: '#FFFFFF',
            width: '327px',
            height: '426px',
          }}
        >
          <h2>There is no feedback yet.</h2>
          <span>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </span>
        </div>
      </div>
    </>
  );
};
