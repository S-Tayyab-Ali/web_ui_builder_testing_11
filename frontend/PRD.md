# PRODUCT REQUIREMENTS DOCUMENT

## EXECUTIVE SUMMARY

**Product Vision:** A web application showcasing Korean egg sandwiches (Gilgeori Toast/Street Toast) with recipes, preparation guides, and ingredient information to help users discover and learn about this popular Korean street food.

**Core Purpose:** Educate and inspire users about Korean egg sandwiches by providing comprehensive information about recipes, ingredients, preparation methods, and variations of this beloved street food.

**Target Users:** Food enthusiasts, home cooks, and anyone interested in Korean cuisine who wants to learn about and make Korean egg sandwiches.

**Key Features:**
- Recipe browsing and viewing (User-Generated Content)
- Ingredient information and guides (User-Generated Content)
- Preparation step-by-step instructions (User-Generated Content)
- Recipe variations and customizations (User-Generated Content)

**Complexity Assessment:** Simple
- **State Management:** Local (browser-based state only)
- **External Integrations:** 0 (reduces complexity)
- **Business Logic:** Simple (content display and basic filtering)
- **Data Synchronization:** None (frontend-only application)

**MVP Success Metrics:**
- Users can browse and view all recipe content
- Users can search and filter recipes by ingredients or difficulty
- Core recipe viewing workflow works without errors

## 1. USERS & PERSONAS

**Primary Persona:**
- **Name:** Sarah Chen
- **Context:** Home cook interested in exploring Korean cuisine, wants to try making Korean egg sandwiches at home
- **Goals:** Find authentic recipes, understand ingredients, learn proper preparation techniques
- **Needs:** Clear instructions, ingredient substitutions, visual guides, difficulty ratings

**Secondary Personas:**
- **Name:** Mike Rodriguez
- **Context:** Food blogger looking for content about Korean street food
- **Goals:** Discover unique recipes and variations to feature
- **Needs:** Detailed recipe information, background stories, authentic preparation methods

## 2. FUNCTIONAL REQUIREMENTS

### 2.1 User-Requested Features (All are Priority 0)

**FR-001: Recipe Browsing and Viewing**
- **Description:** Users can browse a collection of Korean egg sandwich recipes, view detailed information including ingredients, instructions, preparation time, and difficulty level
- **Entity Type:** User-Generated Content
- **User Benefit:** Discover various Korean egg sandwich recipes and learn how to make them
- **Primary User:** Sarah Chen (home cooks)
- **Lifecycle Operations:**
  - **Create:** Not applicable for MVP (content pre-populated)
  - **View:** Users can view recipe cards in grid/list format and click to see full details
  - **Edit:** Not applicable for MVP
  - **Delete:** Not applicable for MVP
  - **List/Search:** Users can browse all recipes, search by name, filter by difficulty level, dietary preferences, or ingredients
  - **Additional:** Users can favorite recipes (stored locally), print recipes, share recipe links
- **Acceptance Criteria:**
  - [ ] Given user visits homepage, when page loads, then display grid of recipe cards with images, titles, and quick info
  - [ ] Given user clicks on recipe card, when detail page loads, then show complete recipe with ingredients, instructions, prep time, cook time, and difficulty
  - [ ] Given user is on recipe detail page, when viewing instructions, then see numbered steps with clear descriptions
  - [ ] Given user wants to find recipes, when using search, then results filter in real-time
  - [ ] Users can filter recipes by difficulty (Easy/Medium/Hard)
  - [ ] Users can filter recipes by dietary preferences (Vegetarian options, Spicy, etc.)
  - [ ] Users can favorite recipes and view their favorites list
  - [ ] Users can print recipe in printer-friendly format

**FR-002: Ingredient Information Guide**
- **Description:** Comprehensive information about ingredients used in Korean egg sandwiches, including descriptions, where to buy, substitutions, and usage tips
- **Entity Type:** User-Generated Content
- **User Benefit:** Understand Korean ingredients and find suitable alternatives if needed
- **Primary User:** Sarah Chen (home cooks)
- **Lifecycle Operations:**
  - **Create:** Not applicable for MVP (content pre-populated)
  - **View:** Users can view ingredient cards and detailed information pages
  - **Edit:** Not applicable for MVP
  - **Delete:** Not applicable for MVP
  - **List/Search:** Users can browse all ingredients, search by name, filter by category (vegetables, proteins, sauces, etc.)
  - **Additional:** Link ingredients to recipes that use them
- **Acceptance Criteria:**
  - [ ] Given user visits ingredients section, when page loads, then display categorized ingredient cards
  - [ ] Given user clicks ingredient, when detail page loads, then show description, common uses, where to buy, and substitutions
  - [ ] Given user views ingredient detail, when scrolling down, then see list of recipes using this ingredient
  - [ ] Users can search ingredients by name
  - [ ] Users can filter ingredients by category
  - [ ] Each ingredient shows substitution suggestions if applicable

**FR-003: Preparation Techniques Guide**
- **Description:** Step-by-step guides for key preparation techniques specific to Korean egg sandwiches (egg cooking methods, toast grilling, assembly techniques)
- **Entity Type:** User-Generated Content
- **User Benefit:** Master the techniques needed to make authentic Korean egg sandwiches
- **Primary User:** Sarah Chen (home cooks)
- **Lifecycle Operations:**
  - **Create:** Not applicable for MVP (content pre-populated)
  - **View:** Users can view technique guides with text and visual descriptions
  - **Edit:** Not applicable for MVP
  - **Delete:** Not applicable for MVP
  - **List/Search:** Users can browse all techniques, search by name
  - **Additional:** Link techniques to recipes that use them
- **Acceptance Criteria:**
  - [ ] Given user visits techniques section, when page loads, then display list of technique guides
  - [ ] Given user clicks technique, when detail page loads, then show step-by-step instructions with tips
  - [ ] Given user views technique detail, when scrolling down, then see related recipes
  - [ ] Users can search techniques by name
  - [ ] Each technique includes difficulty level and estimated time

**FR-004: Recipe Variations Showcase**
- **Description:** Display different variations of Korean egg sandwiches (regional styles, modern twists, dietary adaptations)
- **Entity Type:** User-Generated Content
- **User Benefit:** Explore creative variations and customize recipes to personal preferences
- **Primary User:** Mike Rodriguez (food enthusiasts)
- **Lifecycle Operations:**
  - **Create:** Not applicable for MVP (content pre-populated)
  - **View:** Users can view variation cards and detailed descriptions
  - **Edit:** Not applicable for MVP
  - **Delete:** Not applicable for MVP
  - **List/Search:** Users can browse variations, filter by type (traditional, modern, dietary)
  - **Additional:** Link variations to base recipes
- **Acceptance Criteria:**
  - [ ] Given user visits variations section, when page loads, then display variation cards with images and descriptions
  - [ ] Given user clicks variation, when detail page loads, then show what makes it unique and how to make it
  - [ ] Given user views variation, when scrolling down, then see link to base recipe
  - [ ] Users can filter variations by type
  - [ ] Each variation shows difficulty level and key differences from traditional recipe

### 2.2 Essential Market Features

**FR-005: Responsive Navigation**
- **Description:** Clean, intuitive navigation system that works across all devices
- **Entity Type:** Configuration/System
- **User Benefit:** Easy access to all sections of the website
- **Primary User:** All personas
- **Lifecycle Operations:**
  - **Create:** Not applicable
  - **View:** Users see navigation menu on all pages
  - **Edit:** Not applicable
  - **Delete:** Not applicable
  - **Additional:** Mobile-responsive hamburger menu
- **Acceptance Criteria:**
  - [ ] Given user on any page, when viewing navigation, then see links to Recipes, Ingredients, Techniques, Variations, About
  - [ ] Given user on mobile device, when viewing navigation, then see hamburger menu icon
  - [ ] Given user clicks hamburger menu, when menu opens, then see all navigation options
  - [ ] Navigation highlights current section
  - [ ] Navigation is sticky on scroll for easy access

## 3. USER WORKFLOWS

### 3.1 Primary Workflow: Discovering and Learning a Recipe

**Trigger:** User wants to learn how to make a Korean egg sandwich

**Outcome:** User has complete information needed to make the sandwich

**Steps:**
1. User lands on homepage
2. System displays featured recipes and recipe grid
3. User browses recipes or uses search/filter
4. User clicks on a recipe that interests them
5. System displays full recipe detail page with ingredients, instructions, prep time, difficulty
6. User reads through ingredients list
7. User clicks on unfamiliar ingredient
8. System shows ingredient detail with description and substitutions
9. User returns to recipe
10. User reviews step-by-step instructions
11. User clicks on linked technique (e.g., "perfect egg cooking")
12. System shows technique guide
13. User bookmarks recipe for later
14. System saves favorite to local storage
15. User can print or share recipe

**Alternative Paths:**
- If user wants vegetarian option, then filter recipes by dietary preference
- If user is experienced, then filter by difficulty to find advanced recipes
- If user wants to explore variations, then navigate to variations section from recipe page

### 3.2 Entity Management Workflows

**Recipe Management Workflow**

**View Recipes:**
1. User navigates to Recipes section
2. System displays grid of recipe cards
3. User can scroll through all recipes
4. User can click any recipe to view details
5. System displays full recipe information

**Search/Filter Recipes:**
1. User navigates to Recipes section
2. User enters search term in search bar
3. System filters recipes in real-time
4. User applies difficulty filter
5. System updates displayed recipes
6. User applies dietary filter
7. System shows only matching recipes
8. User can clear filters to see all recipes again

**Favorite Recipes:**
1. User views a recipe they like
2. User clicks "Add to Favorites" button
3. System saves favorite to browser local storage
4. System shows visual confirmation
5. User can navigate to "My Favorites" section
6. System displays all favorited recipes
7. User can remove from favorites
8. System updates favorites list

**Ingredient Management Workflow**

**View Ingredients:**
1. User navigates to Ingredients section
2. System displays categorized ingredient cards
3. User can browse by category
4. User clicks on ingredient
5. System displays ingredient detail page with description, uses, where to buy, substitutions

**Search Ingredients:**
1. User navigates to Ingredients section
2. User enters ingredient name in search
3. System filters ingredients in real-time
4. User clicks on result
5. System displays ingredient details

**Technique Management Workflow**

**View Techniques:**
1. User navigates to Techniques section
2. System displays list of technique guides
3. User clicks on technique
4. System displays step-by-step guide
5. User can see related recipes using this technique

**Variation Management Workflow**

**Browse Variations:**
1. User navigates to Variations section
2. System displays variation cards
3. User can filter by type (traditional/modern/dietary)
4. User clicks on variation
5. System shows what makes it unique
6. User can click through to base recipe
7. System displays base recipe with variation notes

## 4. BUSINESS RULES

### Entity Lifecycle Rules:

**Recipes:**
- **Who can create:** Not applicable for MVP (pre-populated content)
- **Who can view:** All visitors (no authentication required)
- **Who can edit:** Not applicable for MVP
- **Who can delete:** Not applicable for MVP
- **What happens on deletion:** Not applicable for MVP
- **Related data handling:** Recipes link to ingredients and techniques (read-only relationships)

**Ingredients:**
- **Who can create:** Not applicable for MVP (pre-populated content)
- **Who can view:** All visitors
- **Who can edit:** Not applicable for MVP
- **Who can delete:** Not applicable for MVP
- **What happens on deletion:** Not applicable for MVP
- **Related data handling:** Ingredients link to recipes that use them

**Techniques:**
- **Who can create:** Not applicable for MVP (pre-populated content)
- **Who can view:** All visitors
- **Who can edit:** Not applicable for MVP
- **Who can delete:** Not applicable for MVP
- **What happens on deletion:** Not applicable for MVP
- **Related data handling:** Techniques link to recipes that use them

**Favorites:**
- **Who can create:** Any visitor (stored in browser local storage)
- **Who can view:** Only the user who created them (local to their browser)
- **Who can edit:** The user can add/remove favorites
- **Who can delete:** User can remove individual favorites or clear all
- **What happens on deletion:** Removed from local storage only
- **Related data handling:** No server-side data, purely client-side

### Access Control:
- All content is publicly accessible
- No user authentication required for MVP
- Favorites are stored locally per browser

### Data Rules:
- **Recipe Validation:**
  - Must have: title, description, ingredients list, instructions, prep time, cook time, difficulty level
  - Optional: images, tips, variations, dietary tags
  - Difficulty levels: Easy, Medium, Hard
  - Times in minutes
  
- **Ingredient Validation:**
  - Must have: name, description, category
  - Optional: image, where to buy, substitutions, recipes using it
  - Categories: Vegetables, Proteins, Sauces, Seasonings, Bread/Toast, Other

- **Technique Validation:**
  - Must have: name, description, steps
  - Optional: difficulty, estimated time, tips, related recipes

- **Variation Validation:**
  - Must have: name, description, type, base recipe reference
  - Optional: image, difficulty, key differences
  - Types: Traditional, Modern, Dietary Adaptation

### Process Rules:
- Search filters apply in real-time as user types
- Multiple filters can be applied simultaneously (AND logic)
- Favorites persist across browser sessions using localStorage
- Print view removes navigation and interactive elements
- Share functionality generates shareable URL for specific recipe

## 5. DATA REQUIREMENTS

### Core Entities:

**Recipe**
- **Type:** User-Generated Content
- **Attributes:** 
  - id (unique identifier)
  - title (string, required)
  - description (text, required)
  - ingredients (array of objects with name, amount, unit)
  - instructions (array of step objects with order and description)
  - prep_time (number in minutes)
  - cook_time (number in minutes)
  - difficulty (enum: Easy/Medium/Hard)
  - dietary_tags (array: vegetarian, spicy, etc.)
  - image_url (string)
  - tips (array of strings)
  - created_date (timestamp)
  - featured (boolean)
- **Relationships:** 
  - references multiple Ingredients
  - references multiple Techniques
  - has many Variations
- **Lifecycle:** View only for MVP (pre-populated content)
- **Retention:** Permanent (content-based website)

**Ingredient**
- **Type:** User-Generated Content
- **Attributes:**
  - id (unique identifier)
  - name (string, required)
  - description (text, required)
  - category (enum: Vegetables/Proteins/Sauces/Seasonings/Bread/Other)
  - image_url (string)
  - where_to_buy (text)
  - substitutions (array of strings)
  - created_date (timestamp)
- **Relationships:**
  - used in multiple Recipes
- **Lifecycle:** View only for MVP
- **Retention:** Permanent

**Technique**
- **Type:** User-Generated Content
- **Attributes:**
  - id (unique identifier)
  - name (string, required)
  - description (text, required)
  - steps (array of step objects)
  - difficulty (enum: Easy/Medium/Hard)
  - estimated_time (number in minutes)
  - tips (array of strings)
  - created_date (timestamp)
- **Relationships:**
  - used in multiple Recipes
- **Lifecycle:** View only for MVP
- **Retention:** Permanent

**Variation**
- **Type:** User-Generated Content
- **Attributes:**
  - id (unique identifier)
  - name (string, required)
  - description (text, required)
  - type (enum: Traditional/Modern/Dietary)
  - base_recipe_id (reference to Recipe)
  - key_differences (array of strings)
  - difficulty (enum: Easy/Medium/Hard)
  - image_url (string)
  - created_date (timestamp)
- **Relationships:**
  - belongs to one base Recipe
- **Lifecycle:** View only for MVP
- **Retention:** Permanent

**Favorite** (Client-side only)
- **Type:** Configuration/System
- **Attributes:**
  - recipe_id (reference to Recipe)
  - added_date (timestamp)
- **Relationships:**
  - references Recipe
- **Lifecycle:** Full CRUD (stored in browser localStorage)
- **Retention:** Persists in browser until user clears or removes

## 6. INTEGRATION REQUIREMENTS

**External Systems:**
- **None for MVP:** This is a frontend-only application with no external integrations
- All data is static/pre-populated content
- No payment processing, authentication services, or third-party APIs required

## 7. FUNCTIONAL VIEWS/AREAS

### Primary Views:

**Homepage/Landing:**
- Hero section with featured recipe
- Grid of popular recipes
- Quick links to main sections
- Search bar prominently displayed

**Recipe List View:**
- Grid/list toggle for recipe cards
- Search bar at top
- Filter sidebar (difficulty, dietary tags)
- Recipe cards showing: image, title, prep time, difficulty, quick description
- Pagination or infinite scroll

**Recipe Detail View:**
- Large hero image
- Recipe title and description
- Prep time, cook time, difficulty badges
- Ingredients list with amounts
- Step-by-step instructions (numbered)
- Tips section
- Related recipes section
- Favorite button
- Print button
- Share button
- Links to ingredient details
- Links to technique guides

**Ingredients List View:**
- Categorized ingredient cards
- Search bar
- Category filter
- Ingredient cards showing: image, name, category

**Ingredient Detail View:**
- Ingredient name and image
- Description
- Category
- Where to buy information
- Substitution suggestions
- List of recipes using this ingredient

**Techniques List View:**
- List of technique guides
- Search bar
- Technique cards showing: name, difficulty, estimated time

**Technique Detail View:**
- Technique name
- Description
- Step-by-step instructions
- Tips
- Related recipes using this technique

**Variations List View:**
- Grid of variation cards
- Filter by type (Traditional/Modern/Dietary)
- Variation cards showing: image, name, type, base recipe

**Variation Detail View:**
- Variation name and image
- Description
- Type badge
- Key differences from base recipe
- Link to base recipe
- Difficulty level

**My Favorites View:**
- Grid of favorited recipes
- Same card format as recipe list
- Empty state message if no favorites
- Clear all favorites option

**About/Info Page:**
- Information about Korean egg sandwiches
- History and cultural context
- About the website

### Modal/Overlay Needs:
- Mobile navigation menu (hamburger)
- Image lightbox for recipe photos
- Share modal with copy link functionality
- Print preview confirmation

### Navigation Structure:

**Persistent access to:**
- Home
- Recipes
- Ingredients
- Techniques
- Variations
- My Favorites
- About

**Default landing:** Homepage with featured content

**Entity management:** 
- List views show all items with search/filter
- Click any item to go to detail view
- Detail views have breadcrumb navigation back to list
- Related items are linked (e.g., from recipe to ingredient detail)

## 8. MVP SCOPE & CONSTRAINTS

### MVP Success Definition:
- Users can browse and view all recipe content without errors
- Search and filter functionality works smoothly
- Users can favorite recipes and view their favorites
- All content is responsive and works on mobile devices
- Recipe detail pages show complete information
- Ingredient and technique guides are accessible and informative

### Technical Constraints for MVP:
- **Expected concurrent users:** 100-500 (static content, no backend)
- **Data volume limits:** 20-30 recipes, 30-40 ingredients, 10-15 techniques, 10-15 variations
- **Performance:** Fast loading with optimized images, smooth filtering

### Explicitly Excluded from MVP:
- **User accounts and authentication:** Not needed for content browsing; deferred to allow focus on core content experience
- **User-generated content submission:** Complex moderation workflow; deferred to V2 when community features are added
- **Recipe rating and reviews:** Adds complexity with data management; deferred to V2 for community engagement
- **Shopping list generation:** Nice-to-have feature; deferred as it's not essential for learning recipes
- **Meal planning calendar:** Advanced feature requiring significant UI/UX work; deferred to V2
- **Video tutorials:** Content creation intensive; deferred until core written content is validated
- **Multi-language support:** Adds translation complexity; deferred until English version is validated
- **Recipe scaling calculator:** Useful enhancement but not core to learning; deferred to V2
- **Nutritional information:** Requires detailed calculation; deferred as nice-to-have
- **Social sharing to platforms:** Basic link sharing sufficient for MVP; platform integrations deferred
- **Email newsletter:** Marketing feature; deferred until user base grows
- **Recipe print customization:** Basic print sufficient for MVP; advanced options deferred

### Post-MVP Roadmap Preview:
- **V2 Features:**
  - User accounts with saved preferences
  - User-submitted recipes and variations
  - Rating and review system
  - Shopping list generator
  - Recipe scaling calculator
  - Video tutorials for techniques
  
- **V3 Features:**
  - Meal planning calendar
  - Multi-language support (Korean, Spanish, etc.)
  - Nutritional information calculator
  - Social media platform integrations
  - Mobile app version
  - Community forums

## 9. ASSUMPTIONS & DECISIONS

### Business Model:
- Free content website
- No monetization in MVP
- Future potential: ads, premium content, affiliate links for ingredients

### Access Model:
- Public website, no authentication required
- Individual user experience (favorites stored locally)

### Entity Lifecycle Decisions:
- **Recipes:** View only because content is curated and pre-populated for quality control
- **Ingredients:** View only because standardized ingredient database ensures consistency
- **Techniques:** View only because expert-created content maintains quality
- **Variations:** View only because curated variations ensure authenticity
- **Favorites:** Full CRUD because personal preference management is user-controlled

### From User's Product Idea:
- **Product:** Korean egg sandwich website
- **Technical Level:** Basic (interpreted as content-focused informational website)

### Key Assumptions Made:
- **Content-first approach:** Assumed user wants an informational/educational website rather than e-commerce or ordering system, given "basic" responses to all questions
- **No backend needed:** Frontend-only implementation is sufficient for MVP since no user accounts, ordering, or dynamic content management required
- **Pre-populated content:** Recipes and information will be built into the application rather than user-generated, ensuring quality and consistency
- **Local storage for favorites:** Browser localStorage is sufficient for personal recipe bookmarking without requiring user accounts
- **Static content focus:** Website showcases Korean egg sandwiches as educational content rather than facilitating transactions

### Questions Asked & Answers:
- **Q:** What is the main purpose of this website?
- **A:** Basic

- **Q:** Who is your target audience for this website?
- **A:** Basic

- **Q:** What specific features do you want users to be able to do on the website?
- **A:** Basic

- **Q:** If this involves any ordering or e-commerce functionality, how should the ordering process work?
- **A:** Basic

- **Q:** Do you envision any community or social features?
- **A:** Basic

**Interpretation:** Given all "basic" responses, the PRD focuses on a straightforward, content-driven website that educates users about Korean egg sandwiches through recipes, ingredients, and techniques, without complex features like e-commerce, user accounts, or social functionality.

---

PRD Complete - Ready for development