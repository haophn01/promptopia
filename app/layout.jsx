import '@styles/globals.scss'

export const metadata = {
    title: 'Promptopia',
    description: 'A prompt generator for writers'
}

const Rootlayout = () => {
  return (
    <html lang = "en">
        <body>
            <div className ="main">
                <div className='gradient' />
            </div>

            <main className='app'>
                 {children}
            </main>
        </body>
            
    </html>
  )
}

export default Rootlayout