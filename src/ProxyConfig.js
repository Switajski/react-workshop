const ProxyConfig = `{
    "name": "da-strategyreport-frontend",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^16.4.1",
        "react-dom": "^16.4.1",
        "react-scripts": "1.1.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts eject"
    },
    "proxy": "https://localhost:8181/",
    "homepage": "."
}`
export default ProxyConfig