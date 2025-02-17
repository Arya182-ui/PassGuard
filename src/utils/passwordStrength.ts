// Password strength criteria based on NIST guidelines
const CRITERIA = {
  MIN_LENGTH: 8,
  RECOMMENDED_LENGTH: 12,
  PATTERNS: {
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    numbers: /[0-9]/,
    symbols: /[^A-Za-z0-9]/,
  },
  COMMON_PATTERNS: [
    /^12345/,
    /password/i,
    /qwerty/i,
    /abc123/i,
  ]
};

export interface StrengthResult {
  score: number;
  strength: 'very-weak' | 'weak' | 'moderate' | 'strong' | 'very-strong';
  feedback: string[];
}

export function checkPasswordStrength(password: string): StrengthResult {
  const feedback: string[] = [];
  let score = 0;

  // Length checks
  if (password.length < CRITERIA.MIN_LENGTH) {
    feedback.push(`Password must be at least ${CRITERIA.MIN_LENGTH} characters long`);
  } else {
    score += 20;
    if (password.length >= CRITERIA.RECOMMENDED_LENGTH) {
      score += 20;
      feedback.push('Good length!');
    }
  }

  // Character variety checks
  let varietyScore = 0;
  for (const [type, pattern] of Object.entries(CRITERIA.PATTERNS)) {
    if (pattern.test(password)) {
      varietyScore += 15;
      feedback.push(`Contains ${type}`);
    }
  }
  score += Math.min(varietyScore, 60);

  // Check for common patterns
  let hasCommonPattern = false;
  for (const pattern of CRITERIA.COMMON_PATTERNS) {
    if (pattern.test(password)) {
      hasCommonPattern = true;
      score = Math.max(score - 30, 0);
      feedback.push('Contains common pattern - avoid predictable sequences');
      break;
    }
  }

  // Repeated characters
  const repeatedChars = /(.)\1{2,}/;
  if (repeatedChars.test(password)) {
    score = Math.max(score - 20, 0);
    feedback.push('Avoid repeated characters');
  }

  // Determine strength level
  let strength: StrengthResult['strength'];
  if (score < 20) strength = 'very-weak';
  else if (score < 40) strength = 'weak';
  else if (score < 60) strength = 'moderate';
  else if (score < 80) strength = 'strong';
  else strength = 'very-strong';

  return { score, strength, feedback };
}