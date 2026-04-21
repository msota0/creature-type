"""Generates 1080x1920 Instagram Story PNGs for quiz results."""
from html import escape
from typing import Optional
import cairosvg

from .story_art import CREATURE_ART, CREATURES_META

WIDTH = 1080
HEIGHT = 1920


def _wrap_text(text: str, max_chars: int) -> list[str]:
    words = text.split()
    lines, current = [], ""
    for word in words:
        if len(current) + len(word) + 1 <= max_chars:
            current = f"{current} {word}".strip()
        else:
            lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def build_story_svg(creature_key: str) -> str:
    if creature_key not in CREATURES_META:
        raise ValueError(f"Unknown creature: {creature_key}")

    creature = CREATURES_META[creature_key]
    c1, c2 = creature["colors"]
    art_shapes = CREATURE_ART[creature_key]

    title_lines = _wrap_text(escape(creature["title"]), max_chars=32)
    blurb_lines = _wrap_text(escape(creature["blurb"]), max_chars=42)

    title_y_start = 1280
    title_line_height = 56
    title_tspans = "".join(
        f'<tspan x="540" y="{title_y_start + i * title_line_height}">{line}</tspan>'
        for i, line in enumerate(title_lines)
    )

    blurb_y_start = title_y_start + len(title_lines) * title_line_height + 60
    blurb_line_height = 48
    blurb_tspans = "".join(
        f'<tspan x="540" y="{blurb_y_start + i * blurb_line_height}">{line}</tspan>'
        for i, line in enumerate(blurb_lines)
    )

    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}"
     viewBox="0 0 {WIDTH} {HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#130f22" />
      <stop offset="55%" stop-color="#1b1430" />
      <stop offset="100%" stop-color="#130f22" />
    </linearGradient>
    <radialGradient id="blob1" cx="20%" cy="15%" r="40%">
      <stop offset="0%" stop-color="{c1}" stop-opacity="0.40" />
      <stop offset="100%" stop-color="{c1}" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="blob2" cx="80%" cy="85%" r="45%">
      <stop offset="0%" stop-color="{c2}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="{c2}" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="art-glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.55)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0)" />
    </radialGradient>
  </defs>

  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#bg)" />
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#blob1)" />
  <rect width="{WIDTH}" height="{HEIGHT}" fill="url(#blob2)" />

  <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
    {"".join(f'<line x1="{x}" y1="0" x2="{x}" y2="{HEIGHT}" />' for x in range(0, WIDTH, 90))}
    {"".join(f'<line x1="0" y1="{y}" x2="{WIDTH}" y2="{y}" />' for y in range(0, HEIGHT, 90))}
  </g>

  <g transform="translate(540, 280)">
    <rect x="-180" y="-32" width="360" height="64" rx="32"
          fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
    <text x="0" y="8" font-size="26" fill="#e9d5ff" text-anchor="middle"
          font-family="Helvetica, Arial, sans-serif" letter-spacing="3"
          font-weight="600">{escape(creature["badge"]).upper()}</text>
  </g>

  <g transform="translate({WIDTH / 2 - 390}, 380) scale(2.6)">
    <circle cx="150" cy="150" r="118" fill="url(#art-glow)" opacity="0.25" />
    {art_shapes}
  </g>

  <text x="540" y="1140" font-size="30" fill="#c4b5fd" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" letter-spacing="4"
        font-weight="500">YOUR LIBRARY CREATURE IS</text>

  <text x="540" y="1220" font-size="88" fill="#ffffff" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif" font-weight="700">
    {escape(creature["name"])}
  </text>

  <text font-size="38" fill="#fbbf24" text-anchor="middle"
        font-family="Georgia, serif" font-style="italic">
    {title_tspans}
  </text>

  <text font-size="32" fill="rgba(255,255,255,0.82)" text-anchor="middle"
        font-family="Georgia, serif">
    {blurb_tspans}
  </text>

  <text x="540" y="1820" font-size="28" fill="rgba(255,255,255,0.6)"
        text-anchor="middle" font-family="Helvetica, Arial, sans-serif"
        letter-spacing="3">WHICH LIBRARY CREATURE ARE YOU?</text>
  <text x="540" y="1870" font-size="32" fill="#ffffff" text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif" font-weight="600"
        letter-spacing="2">yourquiz.com</text>
</svg>
"""


def generate_story_png(creature_key: str) -> bytes:
    svg = build_story_svg(creature_key)
    return cairosvg.svg2png(
        bytestring=svg.encode("utf-8"),
        output_width=WIDTH,
        output_height=HEIGHT,
    )