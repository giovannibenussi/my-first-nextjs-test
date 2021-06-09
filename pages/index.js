import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <Link href='/about'>
      <button title='About Page'>About page</button>
    </Link>
  </div>
)

export default Index
