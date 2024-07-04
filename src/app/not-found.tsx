// Link de next
import Link from "next/link";

export default function PageNotFound() {
  return (
    <main className="grid h-[70vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, No hemos podido encontrar la página que estás buscando.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md hover:bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
