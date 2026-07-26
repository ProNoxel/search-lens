# Search Lens Architecture

## Overview

Search Lens is designed as a modular system for analyzing, classifying and customizing search results.

The main architectural goal is to separate search engine-specific logic from the core analysis system.

This allows Search Lens to support multiple search providers while keeping the main logic reusable.

---

# High-Level Architecture

                Search Lens

                     |
                     v

            Provider Adapter Layer

                     |
                     v

                Core Engine

                     |
                     v

            Classification Engine

                     |
                     v

             Rendering Layer

                     |
                     v

              User Interface

---

# Core Engine

The Core Engine is the central part of Search Lens.

It does not contain logic specific to any particular search engine.

Responsibilities:

- process search results;
- collect analysis signals;
- run detection modules;
- calculate confidence scores;
- assign result categories.

---

# Search Providers

Search Providers contain search engine-specific logic.

Example structure:

    providers/

       yandex/

       google/

       bing/
    
Each provider is responsible for:

* finding result containers;
* extracting URLs;
* extracting titles and descriptions;
* understanding page structure.

The provider layer should not decide whether a result is good, bad, advertising or organic.

Its role is only to provide structured data for analysis.

---

# Detection System

The Detection System analyzes individual search results.

Possible detectors:

* Label Detector;
* Link Detector;
* Redirect Detector;
* Tracking Detector;
* Text Detector;
* Structure Detector.

Each detector analyzes specific signals and provides information to the Classification Engine.

Example:

     Sponsored label detected
          +100 points

     Advertising redirect detected
          +80 points

     Tracking parameters detected
          +30 points

     Total score: 210
---

# Classification Engine

The Classification Engine converts detected signals into a result category.

Examples:

      Category:
      Sponsored

      Confidence:
      98%

      Category:
      Organic

      Confidence:
      95%

Classification decisions should always be explainable.

Users should understand why a result received a particular category.

---

# Rendering Layer

The Rendering Layer controls how classified results are displayed.

Possible display modes:

* Original;
* Highlight;
* Fade;
* Collapse;
* Hide.

The classification system and display system remain separate.

Search Lens decides what a result is.

The user decides how it should appear.

---

# User Interface

The User Interface provides control over Search Lens behavior.

Possible settings:

* display mode;
* enabled categories;
* custom rules;
* privacy preferences;
* developer tools.

---

# Rules System

Rules define additional detection logic.

Example:

    rules/

       yandex/

       google/

       community/

Rules should be:

* understandable;
* editable;
* extendable;
* community-friendly.

---

# Design Principles

## Modularity

Components should be independent and replaceable.

## Transparency

Every classification should have an understandable explanation.

## Minimal Intervention

Search Lens should modify presentation without breaking website functionality.

## Extensibility

Adding a new search provider or detector should not require rewriting the whole system.

## User Control

Search Lens provides options.

The final decision always belongs to the user.
