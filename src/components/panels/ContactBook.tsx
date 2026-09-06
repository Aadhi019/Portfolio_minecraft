import React, { useState } from 'react';
import { contactData } from '../../data/socials';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';
import { soundManager } from '../../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons';

interface ContactBookProps {
  onGoToEnd: () => void;
  prefillService?: string;
}

export const ContactBook: React.FC<ContactBookProps> = ({ onGoToEnd, prefillService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    prefillService ? `Hi Bala, I am interested in your ${prefillService} trade.` : ''
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'ed8f7c03-05ba-4a38-95d0-35d8ec02378b';

    if (accessKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name,
            email,
            message,
            subject: `[Portfolio Inquiry] from ${name}`,
            from_name: name,
          }),
        });

        const data = await res.json();
        if (data.success) {
          soundManager.playLevelUp();
          setIsSubmitted(true);
        } else {
          // Fallback to mailto if API returned error
          triggerMailto();
          setIsSubmitted(true);
        }
      } catch (err) {
        console.error('Web3Forms dispatch error:', err);
        // Fallback to mailto
        triggerMailto();
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default: Direct client-side mailto dispatch
      triggerMailto();
      soundManager.playLevelUp();
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  const triggerMailto = () => {
    const subject = encodeURIComponent(`[Portfolio Dispatch] Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Bala,\n\nSender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}\n\n--\nSent via Minecraft Developer Portfolio`
    );
    window.open(`mailto:${contactData.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopy = () => {
    const textToCopy = `Sender: ${name} (${email})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    soundManager.playPop();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 select-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Left Column: Parchment Book Interface matching reference screenshot */}
        <div className="mc-parchment p-6 sm:p-7 rounded shadow-2xl relative">
          <div className="border-b-2 border-[#b08968] pb-3 mb-4">
            <h2 className="text-xl sm:text-2xl font-pixel text-[#3b2a1a]">
              Let's Connect
            </h2>
            <p className="text-xs sm:text-sm text-[#6f4e37] font-sans-clean mt-0.5">
              Send word and I will answer within a day.
            </p>
          </div>

          {/* Contact details list */}
          <div className="space-y-4 text-xs sm:text-sm text-[#3b2a1a] mb-6">
            {/* Email */}
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#e6ccb2] rounded border border-[#b08968] shrink-0 mt-0.5">
                <Mail className="w-4 h-4 text-[#4a3525]" />
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#7f5539] uppercase">EMAIL</div>
                <a
                  href={`mailto:${contactData.email}`}
                  onClick={() => soundManager.playPop()}
                  className="font-sans-clean font-semibold hover:underline break-all text-[#2b1810]"
                >
                  {contactData.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#e6ccb2] rounded border border-[#b08968] shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-[#4a3525]" />
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#7f5539] uppercase">PHONE</div>
                <a
                  href={`tel:${contactData.phoneRaw}`}
                  onClick={() => soundManager.playPop()}
                  className="font-sans-clean font-semibold hover:underline text-[#2b1810]"
                >
                  {contactData.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#e6ccb2] rounded border border-[#b08968] shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#4a3525]" />
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#7f5539] uppercase">LOCATION</div>
                <div className="font-sans-clean font-semibold text-[#2b1810]">
                  {contactData.location}
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#e6ccb2] rounded border border-[#b08968] shrink-0 mt-0.5">
                <LinkedinIcon size={16} className="text-[#4a3525]" />
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#7f5539] uppercase">LINKEDIN</div>
                <a
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playPop()}
                  className="font-sans-clean font-semibold hover:underline text-[#2b1810]"
                >
                  linkedin.com/in/bala-aadhityaa
                </a>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start space-x-3">
              <div className="p-1.5 bg-[#e6ccb2] rounded border border-[#b08968] shrink-0 mt-0.5">
                <GithubIcon size={16} className="text-[#4a3525]" />
              </div>
              <div>
                <div className="font-pixel text-[10px] text-[#7f5539] uppercase">GITHUB</div>
                <a
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundManager.playPop()}
                  className="font-sans-clean font-semibold hover:underline text-[#2b1810]"
                >
                  github.com/balaaadhityaa
                </a>
              </div>
            </div>
          </div>

          {/* Page Indicator & To The End button matching screenshot */}
          <div className="pt-3 border-t-2 border-[#b08968] flex items-center justify-between">
            <span className="font-pixel text-[10px] text-[#7f5539]">
              Page 1 of 1
            </span>

            <button
              onClick={() => {
                soundManager.playPortal();
                onGoToEnd();
              }}
              className="mc-button px-4 py-1.5 text-xs flex items-center space-x-1.5 cursor-pointer"
            >
              <span>To The End</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Send Word Contact Form */}
        <div className="mc-panel p-6 sm:p-7 rounded border-2 border-emerald-500/60 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="border-b border-zinc-800 pb-3 mb-4">
              <h3 className="font-pixel text-lg text-emerald-400 mc-glow-green">
                DISPATCH INQUIRY
              </h3>
              <p className="text-xs text-zinc-400 font-sans-clean">
                Direct carrier pigeon to Bala's terminal
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-3.5">
                <div className="w-12 h-12 bg-emerald-950 border-2 border-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-pixel text-base text-white">
                    Dispatch Sent Successfully!
                  </h4>
                  <p className="text-xs text-zinc-300 font-sans-clean max-w-xs mx-auto mt-1">
                    Thank you for reaching out, <span className="text-emerald-300 font-semibold">{name}</span>. Your inquiry has been dispatched to Bala.
                  </p>
                </div>

                {/* Helpful Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                  <button
                    onClick={handleCopy}
                    className="mc-button px-3.5 py-1.5 text-[11px] flex items-center space-x-1.5 cursor-pointer w-full sm:w-auto justify-center"
                    title="Copy message contents to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-300" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={triggerMailto}
                    className="mc-button px-3.5 py-1.5 text-[11px] flex items-center space-x-1.5 cursor-pointer w-full sm:w-auto justify-center"
                    title="Open in your default email app"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-300" />
                    <span>Open in Email App</span>
                  </button>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      soundManager.playPop();
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs text-zinc-400 hover:text-white underline cursor-pointer font-sans-clean"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-pixel text-zinc-300 mb-1">
                    YOUR NAME / IDENTIFIER
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Steve / Recruiter / Founder"
                    className="w-full bg-zinc-950/80 border border-zinc-700 focus:border-emerald-400 rounded px-3 py-2 text-xs text-white font-sans-clean outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-pixel text-zinc-300 mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@domain.com"
                    className="w-full bg-zinc-950/80 border border-zinc-700 focus:border-emerald-400 rounded px-3 py-2 text-xs text-white font-sans-clean outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-pixel text-zinc-300 mb-1">
                    MESSAGE / PROJECT DETAILS
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your build, team, or opportunity..."
                    className="w-full bg-zinc-950/80 border border-zinc-700 focus:border-emerald-400 rounded px-3 py-2 text-xs text-white font-sans-clean outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mc-button mc-button-green w-full py-2.5 text-xs flex items-center justify-center space-x-2 cursor-pointer shadow-lg mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>DISPATCHING PIGEON...</span>
                  ) : (
                    <>
                      <span>SEND DISPATCH</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="pt-4 mt-4 border-t border-zinc-800 text-center text-[10px] text-zinc-500 font-pixel">
            Direct Email: {contactData.email}
          </div>
        </div>
      </div>
    </div>
  );
};
