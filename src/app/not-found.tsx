// Link de next
import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="mt-[10vh] md:mt-[17vh] grid h-[75vh] place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-light sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-light">
          Lo sentimos, No hemos podido encontrar la página que estás buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
