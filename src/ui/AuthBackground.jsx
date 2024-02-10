
function AuthBackground({children}) {
  return (
    <main className="h-screen w-full bg-auth-image bg-cover bg-center bg-no-repeat overflow-auto px-4">
      <section className="h-screen w-full flex flex-col items-center justify-center gap-8 mb-20">
        {children}
      </section>
    </main>
  )
}

export default AuthBackground
