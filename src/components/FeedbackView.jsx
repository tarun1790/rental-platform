import React, { useState } from 'react'

export default function FeedbackView({ feedback, onAddFeedback }) {
  const [selectedTester, setSelectedTester] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const testers = [
    "John Herman", "Rohit Parthi", "Harsha Pilli", "Krishna Kanchancharla",
    "Lakshminarayana P", "Chandu V", "Ranjit", "Gopi", "Niel", "Sujan",
    "Venkata Vedam", "Bhaskar", "Ashok Lamkshman", "Raju", "Hanumanth", "Praveen"
  ]

  const handleSubmitFeedback = async (e) => {
    e.preventDefault()
    if (!selectedTester || !comment) return

    const feedbackData = {
      name: selectedTester,
      rating: parseInt(rating),
      comment: comment
    }

    await onAddFeedback(feedbackData)
    setComment('')
    setSelectedTester('')
    setRating(5)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  // Calculate stats
  const totalReviews = feedback.length
  const averageRating = totalReviews > 0
    ? (feedback.reduce((sum, item) => sum + item.rating, 0) / totalReviews).toFixed(1)
    : 0

  const getStarRatingString = (score) => {
    return "★".repeat(score) + "☆".repeat(5 - score)
  }

  return (
    <div className="feedback-view animate-fade-in">
      <div className="view-header">
        <div>
          <h1 className="view-title text-gradient">Concept Tester Panel</h1>
          <p className="view-description">Gathering structured feedback from target users to evaluate the RealPal MVP prototype.</p>
        </div>
      </div>

      <div className="feedback-layout grid-2">
        {/* Submit Review Column */}
        <div className="glass-card submit-card">
          <h3 className="section-title">Submit Tester Evaluation</h3>
          <p className="section-p">If you are on the tester team, select your name, rate your experience, and leave your honest feature reviews.</p>

          {submitted && (
            <div className="success-banner animate-slide-up" style={{ backgroundColor: 'var(--color-success-light)', border: '1px solid rgba(56,161,105,0.2)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.25rem', color: 'var(--color-success)', fontSize: '0.88rem', fontWeight: 600 }}>
              ✓ Review submitted! Thank you for helping shape the future of RealPal.
            </div>
          )}

          <form onSubmit={handleSubmitFeedback}>
            <div className="form-group">
              <label className="form-label">Tester Identity *</label>
              <select
                required
                value={selectedTester}
                onChange={(e) => setSelectedTester(e.target.value)}
                className="form-select"
              >
                <option value="">-- Choose your name --</option>
                {testers.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Concept Rating</label>
              <div className="rating-select-row">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    className={`star-select-btn ${rating >= star ? 'filled' : ''}`}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Feedback Notes / Suggestions *</label>
              <textarea
                required
                placeholder="Share your thoughts on the business models, bidding simulators, or what features you would like added to manage your properties..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="form-textarea"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" style={{ marginTop: '0.5rem' }}>
              Submit Test Feedback
            </button>
          </form>
        </div>

        {/* Testimonials and Wall of Reviews */}
        <div className="reviews-column flex-column-center">
          <div className="feedback-stats-header glass-card">
            <div className="stat-row">
              <div className="stat-chunk">
                <span className="val">{averageRating}</span>
                <span className="lbl">Average Rating</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-chunk">
                <span className="val">{totalReviews}</span>
                <span className="lbl">Total Reviews</span>
              </div>
            </div>
          </div>

          <div className="reviews-scroll-feed">
            <h3 className="section-title" style={{ fontSize: '1.15rem', marginBottom: '1rem', color: '#fff' }}>Testimonial & Feedback Stream</h3>
            {feedback.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No feedback submitted yet. Be the first to review!</p>
            ) : (
              <div className="reviews-feed-stack">
                {feedback.map(review => (
                  <div key={review.id} className="review-feed-card glass-card">
                    <div className="review-feed-header">
                      <div>
                        <h4 className="reviewer-name">{review.name}</h4>
                        <span className="reviewer-meta">{review.simulated === 1 ? 'Prepopulated Test' : 'User Tester'} • {review.date}</span>
                      </div>
                      <span className="stars-string">{getStarRatingString(review.rating)}</span>
                    </div>
                    <p className="reviewer-comment">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .feedback-layout {
          align-items: stretch;
        }

        .rating-select-row {
          display: flex;
          gap: 0.5rem;
        }

        .star-select-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 1.85rem;
          cursor: pointer;
          transition: color var(--transition-fast), transform var(--transition-fast);
        }

        .star-select-btn:hover {
          transform: scale(1.15);
        }

        .star-select-btn.filled {
          color: var(--color-warning);
        }

        .feedback-stats-header {
          margin-bottom: 1.5rem;
          width: 100%;
        }

        .stat-row {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .stat-chunk {
          text-align: center;
        }

        .stat-chunk .val {
          font-size: 2.2rem;
          font-weight: 850;
          color: #fff;
          display: block;
          line-height: 1.1;
        }

        .stat-chunk .lbl {
          font-size: 0.825rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background-color: var(--border-color);
        }

        .reviews-scroll-feed {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .reviews-feed-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          max-height: 420px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        .review-feed-card {
          padding: 1rem 1.25rem;
          background: rgba(0, 0, 0, 0.15);
          border-left: 3px solid var(--color-primary);
        }

        .review-feed-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .reviewer-name {
          font-size: 0.95rem;
          font-weight: 750;
          color: #fff;
        }

        .reviewer-meta {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 600;
          display: block;
        }

        .stars-string {
          color: var(--color-warning);
          letter-spacing: 1px;
          font-size: 0.85rem;
        }

        .reviewer-comment {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          font-style: italic;
        }
      `}} />
    </div>
  )
}
