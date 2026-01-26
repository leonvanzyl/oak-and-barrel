'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Add n8n chat CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/style.css';
    document.head.appendChild(link);

    // Add custom Oak & Barrel theme styles
    const customStyles = document.createElement('style');
    customStyles.textContent = `
      /* Oak & Barrel Chat Widget Theme
       * Styled to match the restaurant's design system
       * Complete n8n Chat CSS Variables Reference
       * Design Tokens: docs/design/design-tokens.css
       */

      :root {
        /* ========================================
           COLOR VARIABLES
           Mapped to Oak & Barrel Design System
           ======================================== */

        /* Primary - Amber (#E8A54B) */
        --chat--color-primary: #E8A54B;
        /* Primary hover - Amber Deep (#C4872F) */
        --chat--color-primary-shade-50: #C4872F;
        /* Primary active - Brown Oak (#8B6914) */
        --chat--color-primary-shade-100: #8B6914;

        /* Secondary - Cream (#FDF6E9) */
        --chat--color-secondary: #FDF6E9;
        /* Secondary variant - Sand (#F5EBD9) */
        --chat--color-secondary-shade-50: #F5EBD9;

        /* Standard colors */
        --chat--color-white: #FFFFFF;
        /* Light - Cream (#FDF6E9) */
        --chat--color-light: #FDF6E9;
        /* Light shade - Sand (#F5EBD9) */
        --chat--color-light-shade-50: #F5EBD9;
        /* Light shade darker - derived from sand */
        --chat--color-light-shade-100: #E8DCC6;
        /* Medium - Sand border tone */
        --chat--color-medium: #D4C9B8;
        /* Dark - Charcoal (#2D2926) */
        --chat--color-dark: #2D2926;
        /* Disabled - Gray Warm (#6B635A) */
        --chat--color-disabled: #6B635A;
        /* Typing indicator - Charcoal lighter */
        --chat--color-typing: #4A4543;

        /* ========================================
           LAYOUT & SPACING
           Using design system spacing scale
           ======================================== */

        /* Base spacing - 1rem (space-4) */
        --chat--spacing: 1rem;
        /* Border radius - radius-lg (0.75rem) */
        --chat--border-radius: 0.75rem;
        /* Transition duration - duration-fast (150ms) */
        --chat--transition-duration: 150ms;

        /* Window dimensions */
        --chat--window--width: 400px;
        --chat--window--height: 600px;
        /* Window border - Sand color */
        --chat--window--border: 1px solid #F5EBD9;
        /* Window shadow - shadow-xl */
        --chat--window--box-shadow: 0 16px 48px rgba(45, 41, 38, 0.16);

        /* ========================================
           HEADER STYLING
           ======================================== */

        --chat--header-height: auto;
        /* Header padding - space-4 (1rem) */
        --chat--header--padding: 1rem;
        /* Header background - Charcoal (#2D2926) */
        --chat--header--background: #2D2926;
        /* Header text - Cream (#FDF6E9) */
        --chat--header--color: #FDF6E9;
        --chat--header--border-top: none;
        --chat--header--border-bottom: none;
        /* Heading font size - 1.25rem (font-size-xl) */
        --chat--heading--font-size: 1.25rem;
        /* Subtitle font size - 0.875rem (font-size-sm) */
        --chat--subtitle--font-size: 0.875rem;
        /* Line height - relaxed (1.6) */
        --chat--subtitle--line-height: 1.6;

        /* ========================================
           MESSAGE STYLING
           ======================================== */

        /* Message font size - 1rem (font-size-base) */
        --chat--message--font-size: 1rem;
        /* Message padding - space-4 */
        --chat--message--padding: 1rem;
        /* Message border radius - radius-lg */
        --chat--message--border-radius: 0.75rem;
        /* Message line height - relaxed */
        --chat--message-line-height: 1.6;

        /* Bot message - Sand background (#F5EBD9) */
        --chat--message--bot--background: #F5EBD9;
        /* Bot message text - Charcoal (#2D2926) */
        --chat--message--bot--color: #2D2926;
        --chat--message--bot--border: none;

        /* User message - Amber background (#E8A54B) */
        --chat--message--user--background: #E8A54B;
        /* User message text - White */
        --chat--message--user--color: #FFFFFF;
        --chat--message--user--border: none;

        /* Code blocks - subtle charcoal tint */
        --chat--message--pre--background: rgba(45, 41, 38, 0.06);

        /* ========================================
           INPUT & BUTTON STYLING
           ======================================== */

        /* Textarea height */
        --chat--textarea--height: 50px;
        /* Input background - White */
        --chat--input--background: #FFFFFF;
        /* Button background - transparent for icon buttons */
        --chat--button--background: transparent;
        /* Button color - Amber (#E8A54B) */
        --chat--button--color: #E8A54B;
        /* Button hover - Cream soft tint */
        --chat--button--hover--background: #FDF6E9;

        /* ========================================
           TOGGLE BUTTON STYLING
           ======================================== */

        /* Toggle background - Amber (#E8A54B) */
        --chat--toggle--background: #E8A54B;
        /* Toggle hover - Amber Deep (#C4872F) */
        --chat--toggle--hover--background: #C4872F;
        /* Toggle active - Brown Oak (#8B6914) */
        --chat--toggle--active--background: #8B6914;
        /* Toggle icon color - White */
        --chat--toggle--color: #FFFFFF;
        /* Toggle size */
        --chat--toggle--size: 64px;

        /* ========================================
           TYPOGRAPHY (Custom)
           ======================================== */

        /* Body font - Source Sans 3 */
        --chat--font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
      }

      /* Chat window styling */
      #n8n-chat .chat-window {
        font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
        border-radius: 1rem;
        box-shadow: 0 16px 48px rgba(45, 41, 38, 0.16);
        border: 1px solid #F5EBD9;
      }

      /* Header styling with Playfair Display for title */
      #n8n-chat .chat-header {
        background: linear-gradient(135deg, #2D2926 0%, #3d3833 100%);
        border-radius: 1rem 1rem 0 0;
        padding: 1rem 1.25rem;
      }

      #n8n-chat .chat-header-title {
        font-family: 'Playfair Display', Georgia, serif;
        font-weight: 600;
        font-size: 1.125rem;
        letter-spacing: 0.01em;
      }

      #n8n-chat .chat-header-subtitle {
        font-family: 'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif;
        font-size: 0.875rem;
        opacity: 0.85;
      }

      /* Toggle button with glow effect */
      #n8n-chat .chat-toggle {
        box-shadow: 0 4px 24px rgba(232, 165, 75, 0.3);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      #n8n-chat .chat-toggle:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 28px rgba(232, 165, 75, 0.4);
      }

      /* Message styling */
      #n8n-chat .chat-message-bot {
        border-radius: 0.75rem 0.75rem 0.75rem 0.25rem;
      }

      #n8n-chat .chat-message-user {
        border-radius: 0.75rem 0.75rem 0.25rem 0.75rem;
      }

      /* Input area styling */
      #n8n-chat .chat-input {
        border: 2px solid #F5EBD9;
        border-radius: 0.5rem;
        transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      #n8n-chat .chat-input:focus-within {
        border-color: #E8A54B;
        outline: none;
      }

      /* Send button styling */
      #n8n-chat .chat-send-button {
        background: #E8A54B;
        border-radius: 0.5rem;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      #n8n-chat .chat-send-button:hover {
        background: #C4872F;
        transform: translateY(-1px);
      }

      /* Welcome screen styling */
      #n8n-chat .chat-welcome {
        background: linear-gradient(180deg, #FFFDF8 0%, #FDF6E9 100%);
      }

      #n8n-chat .chat-welcome-title {
        font-family: 'Playfair Display', Georgia, serif;
        color: #2D2926;
        font-weight: 600;
      }

      #n8n-chat .chat-welcome-subtitle {
        color: #6B635A;
      }

      /* Get Started button */
      #n8n-chat .chat-start-button {
        background: #E8A54B;
        color: #FFFFFF;
        border-radius: 9999px;
        font-weight: 600;
        padding: 0.75rem 2rem;
        box-shadow: 0 1px 3px rgba(45, 41, 38, 0.08);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      #n8n-chat .chat-start-button:hover {
        background: #C4872F;
        transform: translateY(-2px);
        box-shadow: 0 4px 24px rgba(232, 165, 75, 0.3);
      }

      /* Scrollbar styling for chat messages */
      #n8n-chat .chat-messages::-webkit-scrollbar {
        width: 6px;
      }

      #n8n-chat .chat-messages::-webkit-scrollbar-track {
        background: #FDF6E9;
        border-radius: 3px;
      }

      #n8n-chat .chat-messages::-webkit-scrollbar-thumb {
        background: #E8A54B;
        border-radius: 3px;
      }

      #n8n-chat .chat-messages::-webkit-scrollbar-thumb:hover {
        background: #C4872F;
      }

      /* Typing indicator */
      #n8n-chat .chat-typing-indicator span {
        background: #E8A54B;
      }
    `;
    document.head.appendChild(customStyles);

    // Add inline module script
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@latest/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://n8n.srv1026488.hstgr.cloud/webhook/d7261880-e38a-4e65-b62d-721266b74d5c/chat',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
          'Hi there! Welcome to The Oak and Barrel.',
          'How can I help you today? You can ask about our menu, make a reservation, or learn about our upcoming events.'
        ],
        i18n: {
          en: {
            title: 'Oak & Barrel Assistant',
            subtitle: "We're here to help with reservations, menu questions, and more.",
            footer: '',
            getStarted: 'Start Chat',
            inputPlaceholder: 'Type your message...',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      customStyles.remove();
      script.remove();
      const chatContainer = document.getElementById('n8n-chat');
      if (chatContainer) {
        chatContainer.remove();
      }
    };
  }, []);

  return null;
}
