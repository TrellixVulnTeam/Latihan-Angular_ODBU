const PROXY_CONFIG = [
    {
        context: [
            "/"
        ],
        target: "http://localhost:8181",
        secure: false
    }
]
module.exports = PROXY_CONFIG;