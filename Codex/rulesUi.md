- SCSS only
- BEM naming
- CSS variables for tokens
- no inline styles
- no Tailwind
- mobile-first responsive
- component-scoped SCSS

App shell
 ├── Sidebar
 ├── Top overview
 ├── Constraints banner
 ├── Unit profile grid
 └── Editor drawer

Pages:
- RosterPage
- RulesPage
- ImportExportPage

Main components:
- UnitCard
- UnitEditor
- TeamOverview
- ConstraintsBanner

Responsive behavior:
- Desktop: persistent right drawer
- Tablet: overlay drawer
- Mobile: bottom overlay editor