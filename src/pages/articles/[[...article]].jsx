import React from 'react';
import { useRouter } from 'next/router';

function Article() {
  const router = useRouter();
  const [year, name] = router.query.article || '';

  return (
    <div className="Article">
      <p>
        <strong>Year:</strong> <em>{year || '/index'}</em>
      </p>
      <p>
        <strong>Name:</strong> <em>{name || '/index'}</em>
      </p>
    </div>
  );
}

export default Article;
