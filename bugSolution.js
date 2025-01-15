```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    router.push(href, href, { shallow: true });
  };

  return (
    <div>
      <Link href="/">
        <a onClick={handleLinkClick('/')}>Home</a>
      </Link>
      <Link href="/about">
        <a onClick={handleLinkClick('/about')}>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;
```