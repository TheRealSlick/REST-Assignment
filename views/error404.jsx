const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="/images/errorimg.jpg" alt="Error 404 Image" />
                <div>
                    Photo by <a href="https://unsplash.com/@visuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">visuals</a> on <a href="https://unsplash.com/photos/blue-and-white-star-illustration-JpTY4gUviJM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

                </div>
            </main>
        </Def>
    )
}


module.exports = error404
