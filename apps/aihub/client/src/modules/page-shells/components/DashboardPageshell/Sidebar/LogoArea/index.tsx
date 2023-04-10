import Image from 'next/image';

export function LogoArea() {
  return (
    <div className="flex flex-shrink-0 items-center px-6">
      <div className="h-8 w-auto">
        {/* <Image
          fill
          src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500"
          alt="Logo"
        /> */}
        Logo
      </div>
    </div>
  );
}
