# BAAG Image Guide

This document specifies the required images for the BAAG website, their dimensions, and where they appear.

## Hero Images

### `/images/hero/baag-drop-001.jpg`
- **Dimensions**: 1920 x 1080px (16:9)
- **Format**: JPG, compressed to ~200KB
- **Usage**: Homepage hero background
- **Direction**: Cinematic editorial fashion campaign. Full-body model in wheat field at golden hour. Warm earth tones, film grain.

## Product Images

### Product Front Views
All product front images should follow this specification:
- **Dimensions**: 900 x 1200px (3:4)
- **Format**: JPG, compressed to ~80KB each
- **Background**: Dark burgundy textured (#541F2B-toned) or warm cream (#F1E9DC)
- **Lighting**: Soft studio lighting from top-left
- **Style**: Flat lay or ghost mannequin, luxury e-commerce aesthetic

| File | Product | Description |
|------|---------|-------------|
| `chardi-kala-front.jpg` | CHARDI KALA | Cream tee with gold Punjabi embroidery |
| `punjabi-rooh-front.jpg` | PUNJABI ROOH | Black tee with gold Punjabi embroidery |
| `baag-signature-front.jpg` | BAAG SIGNATURE | Burgundy tee with gold BAAG text |
| `mitti-front.jpg` | MITTI | Olive brown tee with gold Punjabi embroidery |
| `sher-front.jpg` | SHER | Black tee with gold lion embroidery |

### Product Back Views
- Same dimensions and format as front views
- Shows the back graphic/typography for each design

| File | Back Design |
|------|-------------|
| `chardi-kala-back.jpg` | "CHARDI KALA" in serif + Punjabi text |
| `punjabi-rooh-back.jpg` | "PUNJABI ROOH" in serif + Punjabi text |
| `baag-signature-back.jpg` | "BAAG" large + tagline |
| `mitti-back.jpg` | "MITTI" + "Born From The Soil" |
| `sher-back.jpg` | "SHER" + "Quiet Strength" |

## Lookbook Images

### `/images/lookbook/`
- **Dimensions**: 900 x 1200px (3:4) or 1200 x 900px (4:3) for landscape
- **Format**: JPG, compressed to ~120KB each
- **Style**: Editorial fashion photography with warm tones

| File | Category | Direction |
|------|----------|-----------|
| `street-1.jpg` | Street | Male model in London urban setting |
| `street-2.jpg` | Street | Couple in gallery space |
| `studio-1.jpg` | Studio | Female model with dramatic lighting |
| `punjab-1.jpg` | Punjab | Model in golden wheat field at sunset |
| `after-dark-1.jpg` | After Dark | Nighttime urban rooftop |
| `detail-1.jpg` | Detail | Close-up of embroidery detail |
| `detail-2.jpg` | Detail | Close-up of fabric and fit |

## Story Images

### `/images/story/`
- **Dimensions**: 1920 x 1080px (16:9)
- **Format**: JPG, compressed to ~150KB

| File | Direction |
|------|-----------|
| `punjab-landscape.jpg` | Aerial Punjab countryside at golden hour |

## Community Images

### `/images/community/`
- **Dimensions**: 1200 x 675px (16:9)
- **Format**: JPG, compressed to ~100KB

| File | Direction |
|------|-----------|
| `community-1.jpg` | Group of friends at cafe, candid lifestyle |

## Photography Direction Summary

- **Color Palette**: Warm earth tones, burgundy accents, golden hour lighting
- **Mood**: Cinematic, editorial, confident, culturally rooted
- **Models**: South Asian Punjabi, ages 20-30, diverse representation
- **Locations**: Punjab fields, urban London/Toronto streets, minimalist studios
- **Treatment**: Film grain, muted warm colors, shallow depth of field
- **Avoid**: Bright neon, cheap studio backgrounds, cultural clichés (tractors, dhols)

## Image Optimization

1. Export all images as JPG with quality set to 80%
2. Use WebP format with JPG fallback for production
3. Keep total image payload under 2MB for initial page load
4. Use lazy loading for below-the-fold images (already implemented in code)
5. Provide descriptive alt text for accessibility (already implemented)

## Replacement Checklist

- [ ] Hero image (`hero/baag-drop-001.jpg`)
- [ ] 5 product front images (`products/*-front.jpg`)
- [ ] 5 product back images (`products/*-back.jpg`)
- [ ] 7 lookbook images (`lookbook/*.jpg`)
- [ ] 1 story image (`story/*.jpg`)
- [ ] 1+ community images (`community/*.jpg`)
