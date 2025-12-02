# A JATIN RAM CHOWDARY - Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Features a bright gradient design, smooth scrolling navigation, and showcases projects, tech stack, and contact information.

## 🚀 Features

- **Modern Design**: Bright purple-to-pink-to-orange gradient with glassmorphism effects
- **Fully Responsive**: Mobile-first design that works on all screen sizes
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation, and high contrast
- **SEO-Ready**: Optimized meta tags and semantic structure
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Project Showcase**: Featured projects with descriptions and links
- **Tech Stack Display**: Organized categories for languages, frameworks, databases, and tools

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

## 🛠️ Local Development

### 1. Clone or Initialize Repository

```bash
# If cloning from GitHub
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# OR initialize a new repository
mkdir jatin-portfolio
cd jatin-portfolio
# Copy all project files into this directory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Placeholder Files

Make sure you have the following files in the `/public` directory:

- **`/public/avatar.png`**: Your profile picture (recommended: 400x400px)
- **`/public/resume.pdf`**: Your resume PDF file
- **`/public/favicon.ico`**: Your favicon (optional)

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit `/pages/index.jsx` and replace the following values:

```javascript
const NAME = "A JATIN RAM CHOWDARY"  // Your name
const EMAIL = "jatinramchowdary1980@gmail.com"  // Your email
const GITHUB = "https://github.com/Jatin544-art"  // Your GitHub URL
const RESUME_PATH = "/resume.pdf"  // Path to your resume
```

### Update Project Links

In the `projects` array in `/pages/index.jsx`, replace the placeholder GitHub URLs with your actual project repositories:

```javascript
github: "https://github.com/Jatin544-art/trisense"  // Replace with actual URL
```

### Modify Tech Stack

Update the `techStack` object in `/pages/index.jsx`:

```javascript
const techStack = {
  languages: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  tools: ["Git", "Docker", "VS Code", "Postman", "Figma"]
}
```

## 🚢 Deploying to GitHub

### First-Time Setup

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub (https://github.com/new)
# Then link it to your local repository:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Subsequent Updates

```bash
git add .
git commit -m "Your commit message"
git push
```

## 🌐 Deploying to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Sign up/Login** to [Vercel](https://vercel.com)
2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository
3. **Configure Build Settings**:
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)
4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed by Vercel

## 📁 Project Structure

```
jatin-portfolio/
├── pages/
│   ├── _app.js           # App wrapper component
│   └── index.jsx         # Main homepage
├── public/
│   ├── avatar.png        # Profile picture
│   ├── resume.pdf        # Resume PDF
│   └── favicon.ico       # Favicon (optional)
├── styles/
│   └── globals.css       # Global styles and Tailwind imports
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

## 🎨 Color Palette

The site uses a bright gradient background:
- **Primary**: Purple (#a855f7) → Pink (#ec4899) → Orange (#fb923c)
- **Text**: White with varying opacity for hierarchy
- **Accents**: Glassmorphism with backdrop blur

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column)
- **Tablet**: 640px - 1024px (2 columns for some sections)
- **Desktop**: > 1024px (full multi-column layout)

## 🔧 Technologies Used

- **Next.js 14**: React framework with server-side rendering
- **React 18**: UI component library
- **Tailwind CSS 3**: Utility-first CSS framework
- **Lucide React**: Icon library
- **PostCSS & Autoprefixer**: CSS processing

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**A JATIN RAM CHOWDARY**
- Email: jatinramchowdary1980@gmail.com
- GitHub: https://github.com/Jatin544-art

---

Built with ❤️ using Next.js and Tailwind CSS
