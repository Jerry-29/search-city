# Search Places App

Welcome to the Search Places App! This Next.js application empowers users to effortlessly search for cities using the WFT Geo DB API.

## Getting Started

### Prerequisites

Before you get started, ensure you have the following installed:

- Node.js
- npm

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd search-places-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

Create a .env file 
having NEXT_PUBLIC_API_KEY and NEXT_PUBLIC_API_URL variables.

To configure the app,

Replace `<NEXT_PUBLIC_API_URL>` in env with https://wft-geo-db.p.rapidapi.com/v1/geo/cities

Replace `<NEXT_PUBLIC_API_KEY>` in `.env` with your actual RapidAPI key.

### Starting the App

Once configured, start the app by running:

```bash
npm run dev
```

The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- Enter the name of a city in the search box and press Enter to search.
- Utilize pagination controls to navigate through search results.
- Adjust the number of cities fetched from the server using the input box next to the pagination.

### Keyboard Shortcut

For quick access to the search box, press `Ctrl/Cmd + /`.

### Throttling API Calls

To optimize performance, API calls are throttled to prevent multiple requests from being made on every Enter key press.
