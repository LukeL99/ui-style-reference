# neubrutalism QA - 2026-01-29

**URL:** https://enhanced-demos.d3j67dfg4ouvpu.amplifyapp.com/style/neubrutalism  
**Viewport:** 375x812 (Mobile)  
**Status:** ⚠️ ISSUES FOUND

---

## Issues

### 1. Text Concatenation in Latest Articles Section
**Severity:** Medium  
**Location:** "Latest Articles" section (ref: e47-e56)

Category labels are concatenated directly with article titles without spacing:
- `GUIDEThe Complete Guide to TypeScript 5.0` → should be `GUIDE · The Complete Guide...`
- `NEWSCSS Container Queries Are Here!` → should be `NEWS · CSS Container Queries...`
- `OPINIONWhy Every Dev Should Learn SQL` → should be `OPINION · Why Every Dev...`

**Fix:** Add margin/padding between the label and title elements, or include a separator character.

---

## Passed Checks

- ✅ Navigation structure intact and functional
- ✅ No overlapping elements detected
- ✅ Featured articles display correctly with proper spacing
- ✅ Newsletter signup form properly laid out
- ✅ Color palette and CSS implementation sections render correctly
- ✅ Previous/Next navigation links functional
- ✅ All sections accessible in mobile viewport
