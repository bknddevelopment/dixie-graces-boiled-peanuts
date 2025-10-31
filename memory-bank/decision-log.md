# Decision Log

## 2025-10-30: Integrated Dixie Grace Product Image

**Context**: User requested replacing theater masks emoji with actual product image

**Decision**: Use Next.js Image component with product image from parent directory

**Alternatives**:
- Keep emoji placeholder
- Use external CDN for images
- Inline SVG

**Consequences**:
✅ Better visual presentation
✅ Proper image optimization via Next.js
✅ Consistent with modern web practices
⚠️ Image stored in parent directory (consider moving to public/)

---

## 2025-10-30: Created CLAUDE.md

**Context**: Need persistent documentation for future Claude Code instances

**Decision**: Comprehensive CLAUDE.md covering:
- Dev commands
- Design system architecture
- Component patterns
- File structure
- Styling conventions

**Alternatives**:
- Minimal README updates
- Separate docs folder
- Inline code comments only

**Consequences**:
✅ Future Claude instances productive faster
✅ Design system rules documented
✅ Clear architectural guidance
⚠️ Needs maintenance as project evolves

---

## Design System Architecture

**Context**: Need consistent styling across luxury e-commerce site

**Decision**: Centralized token system in `src/theme/tokens/`

**Rationale**:
- Single source of truth
- Easy to maintain brand consistency
- Integrates with Tailwind CSS
- Type-safe with TypeScript

**What NOT to do**:
❌ Never use arbitrary Tailwind values
❌ Don't hardcode colors/spacing
❌ Don't bypass token system
