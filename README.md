# enigma-site

## Planned website structure

- common layout: navbar and footer shown across every page of site
  - nav bar: enigma logo, enigma word, and main page links
  - footer: privacy policy, copyright, sitemap, newsletter subscription box

- `/` home page
- `/contact` socials, email etc
- `/<domain-name>` domain specific pages
- `/<domain-name>/projects` list of all projects in domain
- `/<domain-name>/projects/<project-name>` details of project (auto extract from project's github readme)
- `/people/<username>` person page
- `/blogs` paginated list of all blogs. search and filter by tags option
- `/blog/<blog-slug>` blog article
- `team/<academic-year>/` full leads and team details for academic year (core members under headings seperated by semesters)
- `/events` paginated, searchable, filterable, sortable list of all events, most recent shown on top by default
- `events/<academic-year>/<event-name>` details of a specific event, text description, poster, photogallery, names of organizers/co-ordinators,

## Project structure

- We are using a single repo to host both the frontend and backend code.
- The entire frontend (next js) part lives under the `client` directory.
- The backend with typescript, express, typegoose lives under the `server` directory.
