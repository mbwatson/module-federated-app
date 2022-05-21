# Application with Module Federation

## Development

Install dependencies with `npm i`. Then the single command `npm start` spins up the shell application, along with all packages it consumes, all at once. The shell application spins up on port `8080`. This and the remaining packages are detailed below.

### shell
- port: 8080
- exports:
  + store
  + theme
- consumes:
  + store
  + theme
  + header
  + footer
 
### layout
- port: 3000
- exports:
  + header
  + footer
- consumes:
  + store
  + theme

### shared packages

The following remote packages are shared.

- react
- react-dom
- mui/material
- emotion/react
- emotion/styled
