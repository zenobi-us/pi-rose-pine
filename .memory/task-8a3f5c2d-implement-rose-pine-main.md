# Task: Implement Rose Pine Main Variant

**Created:** 2026-01-17
**Status:** In Progress
**Priority:** High
**Epic:** [Rose Pine Theme Research](epic-1eb097a1-rose-pine-research.md)

## Context

We have successfully implemented and reviewed two Rose Pine variants:
- ✅ Rose Pine Moon (dark variant using Light1 derived colors)
- ✅ Rose Pine Dawn (light variant using Dark1 derived colors)

Now we need to implement Rose Pine Main - the original and primary dark variant of the Rose Pine theme.

## Objective

Implement the Rose Pine Main variant following the established patterns from Moon and Dawn implementations, completing the three-variant collection required for authentic Rose Pine theme support.

## Resources

**Reference Materials:**
- [Rose Pine Implementation Guide](learning-a7f3c2d9-rose-pine-implementation-guide.md)
- [Complete Rose Pine Theme Research](research-ff4d0949-rose-pine-theme-complete.md)

**Existing Implementations:**
- `src/rose-pine-moon.json` - Dark variant template (uses Light1 variants)
- `src/rose-pine-dawn.json` - Light variant template (uses Dark1 variants)

**Official Colors (from research):**

Main Variant Base Colors:
- base: `#191724`
- surface: `#1f1d2e`
- overlay: `#26233a`
- muted: `#6e6a86`
- subtle: `#908caa`
- text: `#e0def4`
- love: `#eb6f92`
- gold: `#f6c177`
- rose: `#ebbcba`
- pine: `#31748f`
- foam: `#9ccfd8`
- iris: `#c4a7e7`
- highlightLow: `#21202e`
- highlightMed: `#403d52`
- highlightHigh: `#524f67`

## Implementation Pattern

**Key Decision:** Main is a dark variant, so it should follow Moon's pattern:
- Moon (dark) uses Light1 variants for brightened colors
- Dawn (light) uses Dark1 variants for darkened colors
- **Main (dark) should use Light1 variants** like Moon

## Steps

### 1. Create Base Theme File
- [x] Create `src/rose-pine-main.json`
- [x] Add official 15 base colors with exact hex values
- [x] Generate Light1/Dark1 derived colors following Moon's pattern
- [x] Use semantic naming: `baseDark1`, `baseLight1`, etc.

### 2. Map Semantic Colors
- [x] Map all color roles from existing themes
- [x] Follow dark theme conventions (use Light1 for emphasis)
- [x] Ensure consistency with Moon's approach
- [x] Map UI elements appropriately

### 3. Update Index
- [x] Import RosePineMain in `src/index.ts`
- [x] Add to themes array export
- [x] Maintain alphabetical order (Dawn, Main, Moon)

### 4. Testing & Validation
- [ ] Build the project
- [ ] Verify all 15 official colors are exact
- [ ] Test semantic color mappings make sense
- [ ] Compare visual consistency with Moon and Dawn
- [ ] Verify no TypeScript errors

### 5. Documentation
- [ ] Update README.md if needed
- [ ] Ensure package.json metadata is current
- [ ] Verify all three variants are documented

## Expected Outcome

A complete Rose Pine Main implementation that:
- Uses exact official hex values
- Follows established Dark1/Light1 pattern from Moon
- Maintains consistency with existing theme structure
- Completes the three-variant Rose Pine collection
- Passes all build and validation checks

## Verification Criteria

- [ ] `rose-pine-main.json` exists with 15 official colors
- [ ] All hex values match research document exactly
- [ ] Light1/Dark1 variants generated consistently
- [ ] Index.ts exports all three themes
- [ ] Build succeeds without errors
- [ ] Visual review shows appropriate contrast and readability

## Notes

**Pattern Observations:**
- Moon uses brighter (Light1) variants for text, accents in dark theme
- Dawn uses darker (Dark1) variants for text, accents in light theme
- Main should mirror Moon's approach as both are dark variants

**Color Derivation Strategy:**
Based on Moon's implementation, for dark themes:
- Light1 = brightened version (for emphasis)
- Dark1 = darkened version (for de-emphasis)

## Progress Log

**2026-01-17 07:58 - Task Created**
- Created task definition based on miniproject framework
- Identified Moon as structural template (both dark variants)
- Prepared implementation checklist

**2026-01-17 08:00 - Implementation Started**
- Created `src/rose-pine-main.json` with official colors
- Generated derived Light1/Dark1 colors following Moon's pattern
- Mapped all semantic color roles
- Updated `src/index.ts` to include Main variant

**Next:** Build and test implementation
