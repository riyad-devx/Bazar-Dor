import Link from 'next/link';
import React from 'react';

type Category = {
  id: string;
  slug: string;
  nameBn: string;
  icon:string
};

const NavLink = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/bazardor/categories'
  );

  const data: Category[] = await res.json();

  console.log(data);

  return (
    <div className="flex gap-5 justify-center border-y border-gray-200 bg-white py-2">
      <Link href="/">হোম</Link>

      {data.map((n) => (
        <Link key={n.id} href={`/category/${n.slug}`}>
            {n.icon}
          {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLink;