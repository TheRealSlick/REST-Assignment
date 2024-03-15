const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>HOME YEAH</h1>
        <div>
          <img src="/images/cool-parrot.jpg" alt="Cool Parrot" />
          <div>
            Photo by <a href="https://unsplash.com/@miklevasilyev?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mikhail Vasilyev</a> on <a href="https://unsplash.com/photos/selective-focus-photography-of-blue-red-and-green-bird-gGC63oug3iY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

          </div>
        </div>
        <a href="/places">
          <button className='btn-primary'>Places Page</button>
        </a>
      </main>
    </Def>
  )
}


module.exports = home
