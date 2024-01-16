import LinkIcon from '@heroicons/react/24/solid/esm/LinkIcon';
import { link } from 'fs';
import Link from 'next/link';
   
  // ...
   
  export default function NavLinks() {
    return (
      <>
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
      </>
    );
  }