---
layout: project
title: "MP4 to GIF Converter"
description: "A Python CLI utility for converting video files to optimized GIF animations with frame rate, trimming, and resize controls."
date: 2025-01-01
tags: ["Python", "Video Processing", "FFmpeg", "Automation", "CLI"]
icon: "🎬"
status: "Completed"
featured: false
github: "https://github.com/tomcampbelloulton/MP4-to-GIF-Converter"
---

## Overview

A lightweight command-line tool for converting MP4 videos to animated GIFs with fine-grained control over output quality, size, and duration. Perfect for creating social media clips, tutorials, or extracting short moments from longer videos without heavy GUI applications.

Built with **MoviePy**, a high-level Python video processing library, the tool abstracts away FFmpeg complexity while remaining fast and efficient.

## Features

### Core Functionality

**Format Conversion**
- Input: MP4 video files (or any format supported by FFmpeg)
- Output: Optimized GIF animations
- Preserves smooth motion and colour palette

**Trimming**
- `start_time` - where to begin conversion (seconds)
- `end_time` - where to stop conversion (seconds)
- Useful for extracting key moments without pre-editing video

**Resizing**
- `resize_width` - scale GIF to specific width in pixels
- Aspect ratio preserved automatically
- Reduces file size for web sharing

**Frame Rate Control**
- `fps` - frames per second (default: 10)
- Lower FPS (5-10) = smaller file size, slightly choppier
- Higher FPS (15-24) = larger file, smoother motion
- Configurable per conversion

## Usage

### Basic Conversion
```python
from GIF_builder import mp4_to_gif

# Convert entire video
mp4_to_gif("input.mp4", "output.gif")
```

### With Custom Options
```python
mp4_to_gif(
    input_path="input.mp4",
    output_path="output.gif",
    start_time=0,        # Start at 0 seconds
    end_time=5,          # Stop at 5 seconds (first 5 seconds)
    resize_width=480,    # Scale to 480px wide
    fps=10               # 10 frames per second
)
```

### Command-Line Usage
Edit the `__main__` section to configure your conversion:

```python
if __name__ == "__main__":
    mp4_to_gif(
        "my_video.mp4",
        "my_animation.gif",
        start_time=2,
        end_time=8,
        resize_width=640,
        fps=12
    )
```

Then run:
```bash
python GIF_builder.py
```

## Implementation Details

### MoviePy Architecture

**VideoFileClip**
```python
clip = VideoFileClip(input_path)
# Automatically detects format and loads video
# Accesses: duration, frame size, fps
```

**Clipping (Trimming)**
```python
clip = clip.subclipped(start_time or 0, end_time or clip.duration)
# Returns a new clip containing only the specified time range
# Original clip unmodified
```

**Resizing**
```python
clip = clip.resized(width=resize_width)
# Scales video proportionally to target width
# Maintains aspect ratio automatically
```

**Export to GIF**
```python
clip.write_gif(output_path, fps=fps)
# Encodes video as animated GIF
# FPS parameter controls frame sampling
# Automatically optimizes palette for GIF format
```

**Resource Cleanup**
```python
clip.close()
# Releases video file handles
# Good practice to prevent file locks
```

## Performance Characteristics

### File Size Implications

**Impact of FPS:**
- 5 fps, 5 seconds = ~25 frames = smaller file
- 24 fps, 5 seconds = ~120 frames = larger file

**Impact of Resolution:**
- 1920px wide = large GIF
- 480px wide = ~4x smaller file size

**Example Conversion (5-second clip):**
- Original MP4: 2.5 MB (1080p, 30fps)
- Output GIF (10 fps, 480px): ~200–500 KB
- Output GIF (5 fps, 360px): ~80–150 KB

### Speed

Conversion time depends on:
- Video codec (H.264 is fast)
- Resolution (higher = slower)
- Duration (longer = longer conversion)

**Typical Times:**
- 5-second clip (480px, 10 fps): 3–10 seconds
- 30-second clip (640px, 10 fps): 15–45 seconds

## Use Cases

### Social Media Content
- Convert gameplay clips to share on Discord/Twitter
- Create short tutorial GIFs for documentation
- Extract highlight reels from longer streams

### Documentation
- Annotate bug reports with GIF reproductions
- Create visual guides in README files
- Demonstrate UI interactions without video player overhead

### Optimization
- Reduce video file size for email sharing
- Create web-friendly format (GIFs load in all browsers)
- Extract key moments to minimize storage

## Dependencies

**Required:**
- `moviepy` - main video processing library
- `ffmpeg` - underlying codec library (auto-installed by moviepy)
- `imageio` - frame export for GIF encoding

**Install:**
```bash
pip install moviepy
```

## Tech Stack

`Python 3.x` · `MoviePy` · `FFmpeg` · `imageio`

---

*A practical utility tool demonstrating video processing in Python, useful for anyone working with multimedia content or creating visual documentation.*
