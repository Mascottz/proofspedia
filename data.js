window.PROOFS = [
  {
    "id": "primes-infinite",
    "no": "01",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Infinitude of primes",
    "theorem": "There are infinitely many prime numbers.",
    "statement": "No finite list contains all primes ; for any finite set of primes there is another prime outside it.",
    "origin": [
      "Euclid",
      "c. 300 BCE"
    ],
    "elegance": "A single product plus one ; the remainder does the rest.",
    "proofLead": "Multiply any finite set of primes, add one, and find a new prime factor.",
    "steps": [
      "Assume p1 to pn are all the primes.",
      "Form N = p1·p2·…·pn + 1. Then N > 1 so it has a prime divisor q.",
      "If q were one of the pi then q divides the product P, and q divides N, so q divides N - P = 1 ; impossible.",
      "Thus q is a prime not in the list ; contradiction. Hence no finite list is complete."
    ],
    "variants": "A topological rephrasing and a minimal-prime counting variant keep the same idea.",
    "intuition": "A number that leaves remainder 1 on division by every known prime must bring a new prime with it.",
    "whyItLives": "Uses only divisibility yet overturns finiteness in four lines ; generations first meet infinity here.",
    "added": "2024.03.12",
    "glow": 9.6,
    "examples": [
      {
        "label": "First five primes build a new prime",
        "title": "First five primes build a new prime",
        "problem": "Take the set {2,3,5,7,11} ; form N = product +1 = 2311 ; show N yields a new prime not in the set.",
        "solution": "Product = 2310 ; N = 2311 ; test divisibility by 2,3,5,7,11 all leave remainder 1 ; prime factorisation of 2311 is itself prime ; it is new ; in general any prime factor of N is new."
      },
      {
        "label": "Any finite set can be escaped",
        "title": "Any finite set can be escaped",
        "problem": "Assume you are given any finite set of primes, e.g. {2,7,17} ; produce a prime outside it without searching.",
        "solution": "Form N = 2·7·17 +1 = 239 ; gcd(N, each pi)=1 ; let q be any prime divisor of N (239 itself) ; q cannot be in the set, else it would divide both N and product, hence 1 ; thus q is new."
      }
    ]
  },
  {
    "id": "sqrt2-irrational",
    "no": "02",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Irrationality of sqrt 2",
    "theorem": "sqrt 2 cannot be expressed as a ratio of integers.",
    "statement": "There are no integers a, b with b not 0 and a squared equals 2 b squared.",
    "origin": [
      "Pythagoreans",
      "c. 500 BCE"
    ],
    "elegance": "Parity alone collapses the assumption ; even forces even forever.",
    "proofLead": "Assume a reduced fraction equals sqrt 2 ; follow parity to a contradiction on minimality.",
    "steps": [
      "Suppose sqrt 2 = a / b with a, b positive integers and gcd(a, b) = 1.",
      "Then a squared = 2 b squared so a squared is even, hence a is even ; write a = 2k.",
      "Substituting gives 4k squared = 2 b squared so b squared = 2k squared, thus b is even.",
      "Both a and b are even, contradicting that a / b was in lowest terms ; therefore no such fraction exists."
    ],
    "variants": "Same parity argument shows sqrt p irrational for any prime p ; a geometric dissection gives a visual descent.",
    "intuition": "Squaring doubles area ; if side and diagonal shared a common unit, that unit would divide itself infinitely.",
    "whyItLives": "One definition of evenness becomes an impossibility proof ; descent made visible.",
    "added": "2024.03.14",
    "glow": 9.2,
    "examples": [
      {
        "label": "The square root of 3 is irrational",
        "title": "The square root of 3 is irrational",
        "problem": "Prove that sqrt 3 is irrational.",
        "solution": "Assume sqrt 3 = a/b in lowest terms. Then a squared = 3b squared, so 3 divides a. Write a=3k. Substitution gives b squared=3k squared, so 3 divides b as well. This contradicts lowest terms."
      },
      {
        "label": "The only integer solution is zero",
        "title": "The only integer solution is zero",
        "problem": "Show that a squared = 2b squared has no nonzero integer solution.",
        "solution": "If a nonzero solution existed, divide a and b by their greatest common divisor. The reduced pair would satisfy the same equation. The parity argument then makes both even, a contradiction."
      }
    ]
  },
  {
    "id": "primes-4k3",
    "no": "03",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Primes congruent to 3 mod 4",
    "theorem": "There are infinitely many primes p with p equivalent to 3 mod 4.",
    "statement": "The progression 3, 7, 11, 19, 23 and on contains infinitely many primes.",
    "origin": [
      "Euclid's method",
      "Dirichlet 1837 for general case"
    ],
    "elegance": "Euclid's trick survives one residue twist ; multiply the right class, subtract one.",
    "proofLead": "Mimic Euclid but restrict to numbers equivalent to 3 mod 4 ; their product minus one forces a new prime of the same form.",
    "steps": [
      "Assume only finitely many such primes exist ; list them p1 to pn.",
      "Let N = 4·p1·…·pn - 1. Then N is 3 mod 4 and N > 1.",
      "Any integer 3 mod 4 has a prime factor 3 mod 4 ; otherwise all factors 1 mod 4 would multiply to 1 mod 4.",
      "Pick a prime divisor q of N with q 3 mod 4. If q were among the pi then q divides the product, but N is -1 mod q ; contradiction. So q is new."
    ],
    "variants": "For 1 mod 4 the same product fails ; Dirichlet needed analysis. This elementary fragment opens the door to arithmetic progressions.",
    "intuition": "Numbers 3 mod 4 cannot be built from 1 mod 4 primes alone ; remainder -1 guarantees a witness stays in the class.",
    "whyItLives": "A modest modulus change reveals structure ; first step toward progressions.",
    "added": "2024.04.02",
    "glow": 8.9,
    "examples": [
      {
        "label": "Constructing a new 3 mod 4 prime from 3 and 7",
        "title": "Constructing a new 3 mod 4 prime from 3 and 7",
        "problem": "Start with {3,7} ; find a 3 mod 4 prime outside them via the construction.",
        "solution": "N=4·3·7 -1=83 ; 83 is 3 mod 4? 83 mod4=3 ; prime factors of N are 83 itself 3 mod4, so new ; in general any divisor 3 mod4 of N is new because it cannot divide product."
      },
      {
        "label": "Why the method fails for 1 mod 4",
        "title": "Why the method fails for 1 mod 4",
        "problem": "Show product minus one of 1 mod4 primes does not guarantee a new 1 mod4 prime.",
        "solution": "Take {5,13} both 1 mod4 ; N=4·5·13 -1=259=7·37 ; prime factors 7 and 37 are 3 mod4 and 1 mod4 mixed ; N is 3 mod4, so its 1 mod4 factors may not exist ; need Dirichlet for 1 mod4 case."
      }
    ]
  },
  {
    "id": "bertrand-postulate",
    "no": "04",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Bertrand's postulate",
    "theorem": "For every integer n at least 1, there is a prime p with n < p ≤ 2n.",
    "statement": "No interval (n, 2n] is free of primes.",
    "origin": [
      "Joseph Bertrand 1845 conjectured",
      "Pafnuty Chebyshev 1850 proved",
      "Paul Erdos 1932 elegant proof"
    ],
    "elegance": "The central binomial coefficient is too large to be built from small primes alone.",
    "proofLead": "Erdos compares a lower bound for the central binomial coefficient with an upper bound for its prime factors under the assumption that the interval contains no prime.",
    "steps": [
      "Let P(m) be the product of primes at most m. Induction gives P(m)<4 to the m. For m=2r, the primes in (r,2r] divide binom(2r,r)<4 to the r, and P(r)<4 to the r. For m=2r+1, the primes in (r+1,2r+1] divide binom(2r+1,r)<4 to the r, and P(r+1)<4 to the r+1. The last coefficient is below 4 to the r because the two equal central coefficients together are smaller than the sum 2 to the power 2r+1. The base case is P(1)=1.",
      "For n at least 96, suppose there is no prime in (n,2n]. The central coefficient C=binom(2n,n) is at least 4 to the n divided by 2n+1, because it is the largest of the 2n+1 coefficients whose sum is 4 to the n.",
      "By Legendre’s formula, primes p with 2n/3 < p ≤ n have exponent zero in C, and primes in (n,2n] are absent by assumption. For sqrt(2n) < p ≤ 2n/3, the exponent is at most one. For p ≤ sqrt(2n), the entire prime power dividing C is at most 2n.",
      "There are at most (sqrt(2n)+1)/2 primes up to sqrt(2n). The estimate for P therefore gives C < (2n) to the power (sqrt(2n)+1)/2, times 4 to the power 2n/3.",
      "Taking logarithms, define D(n)=n ln(4)/3-ln(2n+1)-((sqrt(2n)+1)/2)ln(2n). Direct substitution gives D(96)>0.04. Its derivative is ln(4)/3-2/(2n+1)-ln(2n)/(2sqrt(2n))-(sqrt(2n)+1)/(2n). For n≥96 the three subtracted terms decrease and sum to less than 0.28, while ln(4)/3>0.46. Thus D is positive, so the upper bound contradicts the lower bound.",
      "For 2 ≤ n ≤ 95, use the consecutive primes 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. If p ≤ n < q are consecutive in this list, then q ≤ 2p ≤ 2n. For n=1, choose p=2."
    ],
    "variants": "The proof is elementary but technical. Chebyshev’s estimates and later analytic methods give stronger information about prime gaps.",
    "intuition": "The coefficient counts too many subsets to be assembled from prime factors that are all small.",
    "whyItLives": "A global statement about prime gaps is forced by one integer and a careful inventory of its prime factors.",
    "added": "2024.05.09",
    "glow": 9.1,
    "examples": [
      {
        "label": "The interval from 10 to 20",
        "title": "The interval from 10 to 20",
        "problem": "Find a prime in (10,20].",
        "solution": "11 is prime and 10 < 11 ≤ 20, so it is a witness."
      },
      {
        "label": "The interval from 100 to 200",
        "title": "The interval from 100 to 200",
        "problem": "Find a prime in (100,200].",
        "solution": "101 is prime: it has no prime divisor at most 10. Since 100 < 101 ≤ 200, it lies in the required interval."
      }
    ]
  },
  {
    "id": "basel-problem",
    "no": "05",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "The Basel sum",
    "theorem": "Sum 1 over n squared from 1 to infinity equals pi squared over 6.",
    "statement": "The reciprocal squares sum to one sixth of pi squared.",
    "origin": [
      "Pietro Mengoli 1650 posed",
      "Leonhard Euler 1735 solved"
    ],
    "elegance": "Euler treats sin x as an infinite polynomial ; its roots dictate its coefficients.",
    "proofLead": "Write sin x two ways ; as a power series and as a product over zeros ; compare the x cubed coefficient.",
    "steps": [
      "sin x = x - x cubed over 6 + x to 5 over 120 - … .",
      "Zeros of sin x are at k pi for integer k, so formally sin x = x product over n at least 1 of (1 - x squared over n squared pi squared).",
      "Expand product to order x cubed ; coefficient of x cubed equals - (1 over pi squared) sum 1 over n squared times x cubed.",
      "Compare with series coefficient -1 over 6 ; equate to get sum 1 over n squared = pi squared over 6. Rigour follows via Weierstrass product for sin."
    ],
    "variants": "Fourier analysis, residue calculus, and Parseval give alternate proofs ; elementary double integral proofs exist.",
    "intuition": "Sine knows both its Taylor coefficients and its zeros ; forcing descriptions to agree reveals a global sum from local roots.",
    "whyItLives": "One coefficient comparison links discrete summation to circle geometry ; it inaugurated zeta values.",
    "added": "2024.06.18",
    "glow": 9.7,
    "examples": [
      {
        "label": "A partial sum gives an approximation to pi",
        "title": "A partial sum gives an approximation to pi",
        "problem": "Use the first ten terms of the reciprocal-square sum to estimate pi.",
        "solution": "The partial sum is about 1.54977. Multiplying by 6 and taking the square root gives about 3.049, which approaches pi as more terms are added."
      },
      {
        "label": "The sum over odd squares",
        "title": "The sum over odd squares",
        "problem": "Deduce the sum of 1/n squared over positive odd n.",
        "solution": "The even terms contribute one quarter of the full sum, since 1/(2n) squared is 1/(4n squared). The odd terms therefore contribute three quarters of pi squared/6, which is pi squared/8."
      }
    ]
  },
  {
    "id": "fundamental-algebra",
    "no": "06",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "Fundamental theorem of algebra",
    "theorem": "Every nonconstant polynomial with complex coefficients has a complex root.",
    "statement": "If p(z) = a_n z to n + … + a_0 with a_n not 0, n at least 1, then p(c)=0 for some c in C.",
    "origin": [
      "Carl Friedrich Gauss 1799 first proof",
      "d'Alembert 1746",
      "Liouville route"
    ],
    "elegance": "Liouville makes bounded entire functions constant ; a polynomial without a root would invert to one.",
    "proofLead": "Assume p never vanishes ; then 1 over p is entire and bounded, so by Liouville it is constant, absurd.",
    "steps": [
      "Suppose p(z) has no zero. Then f(z)=1 over p(z) is entire.",
      "As absolute z tends to infinity, absolute p(z) tends to infinity because leading term dominates ; so absolute f(z) tends to 0 at infinity.",
      "Hence absolute f is bounded on C ; large absolute z small, compact disk bounded by continuity.",
      "Liouville says a bounded entire function is constant ; so p is constant, contrary to degree at least 1."
    ],
    "variants": "Topological proofs use winding number ; algebraic proofs build C as R[x] over (x squared +1).",
    "intuition": "A polynomial that never hits zero would let its reciprocal stay tame everywhere ; infinity tames at large radius, compactness at finite radius.",
    "whyItLives": "Growth at infinity meets rigidity inside ; one principle replaces intricate root chasing.",
    "added": "2024.07.01",
    "glow": 9,
    "examples": [
      {
        "label": "Cubic must hit zero",
        "title": "Cubic must hit zero",
        "problem": "Show p(z)=z^3 -2z +2 has a complex root without solving.",
        "solution": "Nonconstant polynomial ; if no root then 1/p entire bounded (goes to 0 at infinity) ; Liouville forces constant ; contradiction ; root exists (numerically about -1.77)."
      },
      {
        "label": "Why 1/(z^2+1) is not bounded entire",
        "title": "Why 1/(z^2+1) is not bounded entire",
        "problem": "Explain why Liouville does not apply to 1/(z^2+1).",
        "solution": "z^2+1 has zeros at i and -i, so 1/(z^2+1) not entire ; boundedness fails near poles ; theorem needs nowhere-zero hypothesis, so no contradiction."
      }
    ]
  },
  {
    "id": "cantor-diagonal",
    "no": "07",
    "domain": "Set Theory",
    "domainSlug": "set-theory",
    "title": "Uncountability of the reals",
    "theorem": "The interval (0,1) is uncountable ; R is strictly larger than N.",
    "statement": "No enumeration of real numbers in (0,1) is complete.",
    "origin": [
      "Georg Cantor 1891 diagonal argument"
    ],
    "elegance": "Change one digit along the diagonal ; the new number evades every row.",
    "proofLead": "List any sequence of reals in decimal, then build a diagonal number whose nth digit differs from nth number's nth digit.",
    "steps": [
      "Suppose (0,1) were countable ; list elements as r1, r2, … with decimal expansions r_n = 0. a_{n1} a_{n2} … avoiding trailing 9s.",
      "Define b_n = 5 if a_{nn} not 5, else 6 ; set x = 0. b1 b2 b3 … .",
      "For each n, x differs from r_n at decimal place n by construction, so x not equal r_n.",
      "Thus x in (0,1) is not in the list ; no list is complete ; (0,1) is uncountable."
    ],
    "variants": "Cantor first proved via nested intervals ; diagonalization became engine of incompleteness and undecidability.",
    "intuition": "A table has a diagonal ; twisting each diagonal entry steps out of every row at once.",
    "whyItLives": "Three lines create two infinities ; scales to power sets, halting problems, cardinal hierarchy.",
    "added": "2024.07.22",
    "glow": 9.8,
    "examples": [
      {
        "label": "Build a number outside a short list",
        "title": "Build a number outside a short list",
        "problem": "Apply the diagonal rule to 0.123, 0.456, and 0.789.",
        "solution": "The diagonal digits are 1, 5, and 9. Replace each 5 by 6 and every other digit by 5, giving 0.565. It differs from the first number in digit 1, the second in digit 2, and the third in digit 3."
      },
      {
        "label": "A finite power set example",
        "title": "A finite power set example",
        "problem": "For A={a,b,c}, use a diagonal set to defeat any proposed listing f of its subsets.",
        "solution": "Define D={x in A: x is not in f(x)}. For each x, D differs from f(x) at x, so D is not any value of f. For example, if f(a)={a,b}, f(b)={b}, f(c)={}, then D={c}."
      }
    ]
  },
  {
    "id": "sylvester-gallai",
    "no": "08",
    "domain": "Geometry",
    "domainSlug": "geometry",
    "title": "Sylvester-Gallai",
    "theorem": "For a finite noncollinear set in the plane, some line passes through exactly two points.",
    "statement": "An ordinary line always exists.",
    "origin": [
      "James Joseph Sylvester 1893 posed",
      "Tibor Gallai 1944 proved",
      "Leroy Kelly elegant dual proof"
    ],
    "elegance": "Duality turns the claim into a count of vertices in a line arrangement.",
    "proofLead": "In the dual plane, an ordinary line becomes an intersection of exactly two lines. Euler’s formula for a projective line arrangement forces such an intersection.",
    "steps": [
      "Dualize the finite point set to distinct lines in the real projective plane. The original points are not all collinear, so the dual lines are not all concurrent. An ordinary line in the original set corresponds to an intersection incident to exactly two dual lines.",
      "Let t_k count the intersection points incident to exactly k lines. Regard the arrangement as a graph on the projective plane. Its vertices and edges satisfy V = sum t_k and E = sum k t_k, because a k-fold intersection has degree 2k.",
      "Every region has at least three sides: two projective lines meet only once, and a one-sided region would require all lines to be concurrent. Since each edge borders two regions, 3F ≤ 2E.",
      "Euler’s formula for the projective plane is V - E + F = 1. Substituting F = 1 - V + E into the side count gives sum (3-k)t_k ≥ 3.",
      "For k ≥ 3 each term (3-k)t_k is nonpositive. The sum can be positive only if t_2 > 0. That double intersection is dual to a line containing exactly two of the original points."
    ],
    "variants": "A Euclidean proof chooses an extremal point-line pair. The dual form connects the theorem to incidence geometry and Euler characteristic.",
    "intuition": "If every intersection had three or more lines, the arrangement would have too few regions to satisfy Euler’s formula.",
    "whyItLives": "A statement about straight lines becomes an Euler count; duality exposes the hidden topology.",
    "added": "2024.08.11",
    "glow": 8.8,
    "examples": [
      {
        "label": "Four points in general position",
        "title": "Four points in general position",
        "problem": "For four points with no three collinear, identify an ordinary line.",
        "solution": "Every line through any chosen pair contains exactly those two points, so each of the six pair-lines is ordinary."
      },
      {
        "label": "A 3 by 3 lattice contains an ordinary line",
        "title": "A 3 by 3 lattice contains an ordinary line",
        "problem": "In the nine points (i,j) with i,j in {0,1,2}, find a line containing exactly two points.",
        "solution": "The line y=2x contains (0,0) and (1,2). Its only other point with x in {0,1,2} would have y=4, outside the set. So this line is ordinary."
      }
    ]
  },
  {
    "id": "cayley-formula",
    "no": "09",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "Cayley's formula",
    "theorem": "There are n to n-2 labelled trees on n vertices.",
    "statement": "Number of distinct trees with vertex set 1 to n equals n to n-2.",
    "origin": [
      "Arthur Cayley 1889",
      "Heinz Prufer 1918 bijective proof"
    ],
    "elegance": "Prufer codes turn a tree into a word length n-2 ; counting words counts trees.",
    "proofLead": "Peel leaves iteratively and record neighbor ; this encodes a tree as a sequence in [n] to n-2 with perfect recovery.",
    "steps": [
      "Given a tree, repeatedly delete leaf with smallest label and write down its neighbor. After n-2 steps a sequence length n-2 remains ; this is Prufer code.",
      "Degree of vertex v equals 1 plus its appearances in code.",
      "From code to tree ; let L be labels missing from code (initial leaves). Repeatedly connect smallest in L to first code entry, remove both.",
      "Both maps are inverse ; hence trees correspond to sequences, and count is n to n-2."
    ],
    "variants": "Kirchhoff matrix-tree theorem gives algebraic proof ; Joyal species proof is categorical.",
    "intuition": "Pruning leaves one by one records branching history ; final word remembers how tree was grown.",
    "whyItLives": "Humble peeling yields perfect bijection ; counting becomes spelling.",
    "added": "2024.09.03",
    "glow": 9.3,
    "examples": [
      {
        "label": "Trees on three labelled vertices",
        "title": "Trees on three labelled vertices",
        "problem": "List the three trees on vertices 1, 2, 3 using their Prufer codes.",
        "solution": "The one-entry codes 1, 2, and 3 give the edge sets {12,13}, {12,23}, and {13,23}, respectively. Thus there are 3 trees."
      },
      {
        "label": "Decode the word (2,2,3)",
        "title": "Decode the word (2,2,3)",
        "problem": "Rebuild the tree on {1,2,3,4,5} encoded by (2,2,3).",
        "solution": "The smallest label absent from the remaining word is 1, so add 1-2. Then 4 is the smallest absent label, so add 4-2. Next add 2-3, and join the last two labels 3-5. The degrees are 1, 3, 2, 1, 1, matching one plus each label’s number of appearances."
      }
    ]
  },
  {
    "id": "sperner-lemma",
    "no": "10",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "Sperner's lemma",
    "theorem": "Every properly coloured triangulation of a triangle contains a rainbow small triangle.",
    "statement": "With vertices coloured 1,2,3 on boundary and interior arbitrarily, some facelet bears all three colours.",
    "origin": [
      "Emanuel Sperner 1928"
    ],
    "elegance": "Count doorways along a walk ; parity forces a complete triangle inside.",
    "proofLead": "Label edges by colour transitions and traverse ; odd number of 1-2 edges on base guarantees odd complete triangles.",
    "steps": [
      "Triangulate the large triangle with corner colours 1, 2, 3. On each side, forbid the opposite colour: no 3 on the 1-2 side, no 1 on the 2-3 side, and no 2 on the 3-1 side.",
      "Call an edge a 1-2 edge when its endpoints have colours 1 and 2. The outer boundary contains an odd number of 1-2 edges: the 1-2 side changes colour an odd number of times, and the other two sides contribute none.",
      "Count incidences between small triangles and their 1-2 edges. Each interior 1-2 edge is counted twice and each boundary 1-2 edge once, so the total number of incidences is odd.",
      "A small triangle has one 1-2 edge exactly when its three vertices have all three colours. Triangles with two 1-2 edges contribute an even count, and all others contribute zero.",
      "Therefore the number of rainbow triangles is odd, in particular at least one."
    ],
    "variants": "Monsky's theorem about dissecting square into odd equal-area triangles follows with 2-adic valuation ; Tucker lemma is antipodal cousin.",
    "intuition": "Boundary parity cannot disappear inside; it forces a small triangle where all three colours meet.",
    "whyItLives": "One-dimensional parity captures two-dimensional topology ; same door argument proves Brouwer.",
    "added": "2024.09.18",
    "glow": 9,
    "examples": [
      {
        "label": "The midpoint subdivision",
        "title": "The midpoint subdivision",
        "problem": "Subdivide a triangle by joining its three side midpoints. Colour the corners 1, 2, 3 and the midpoints of sides 1-2, 2-3, 3-1 by 1, 2, 3, respectively. Find a rainbow triangle.",
        "solution": "The central triangle has the three midpoints as vertices, so its colours are 1, 2, 3. It is rainbow, as the parity argument requires."
      },
      {
        "label": "A one-dimensional parity version",
        "title": "A one-dimensional parity version",
        "problem": "A subdivided interval has endpoint colours 1 and 2, and interior vertices use either colour. Show at least one adjacent pair has different colours.",
        "solution": "Moving from the left endpoint to the right endpoint changes colour an odd number of times. In particular, at least one small interval has one endpoint of each colour."
      }
    ]
  },
  {
    "id": "turan-theorem",
    "no": "11",
    "domain": "Graph Theory",
    "domainSlug": "graph-theory",
    "title": "Turan's theorem",
    "theorem": "The n-vertex graph with no (r+1)-clique and maximal edges is balanced r-partite Turan graph.",
    "statement": "If G has no K_{r+1} then e(G) at most (1 - 1 over r) times n squared over 2 with equality for balanced parts.",
    "origin": [
      "Pal Turan 1941"
    ],
    "elegance": "A weight-shifting argument compresses every graph onto a clique of at most r vertices.",
    "proofLead": "The Motzkin-Straus argument bounds a weighted edge sum by the clique number. Equal weights give the edge bound, and a balanced complete multipartite graph attains it.",
    "steps": [
      "Let G be K_{r+1}-free and choose nonnegative weights x_v with sum 1. Write Q = sum x_u x_v over edges uv. If two positive-weight vertices u,v are nonadjacent, Q is linear in how their combined weight is split between u and v.",
      "Move all of x_u+x_v onto whichever of u or v has the larger sum of weights on its neighbours. This does not decrease Q and removes one positive weight. Repeating leaves positive weight only on a clique of size k ≤ r.",
      "On that clique, Q = (1 - sum x_v squared)/2 ≤ (1 - 1/k)/2 ≤ (1 - 1/r)/2, since the sum of k squared weights is at least 1/k.",
      "Set every weight to 1/n. Then Q=e(G)/n squared, so e(G) ≤ (1 - 1/r)n squared/2. Since e(G) is an integer, it is at most the floor of this quantity.",
      "A complete r-partite graph with part sizes differing by at most one has exactly that many edges. It is K_{r+1}-free, so it attains the bound and is extremal."
    ],
    "variants": "The same weighted lemma gives a short route to extremal bounds; stability results describe graphs close to equality.",
    "intuition": "Move weight away from nonadjacent pairs until only a clique remains; the forbidden clique size caps the total.",
    "whyItLives": "A continuous optimization argument gives an exact integer extremum and explains why balanced parts appear.",
    "added": "2024.10.01",
    "glow": 8.7,
    "examples": [
      {
        "label": "Mantel’s theorem on five vertices",
        "title": "Mantel’s theorem on five vertices",
        "problem": "Find the maximum number of edges in a triangle-free graph on five vertices.",
        "solution": "Take r=2. The bound is floor(5 squared/4)=6. The complete bipartite graph with parts of sizes 2 and 3 has 6 edges and no triangle, so the bound is sharp."
      },
      {
        "label": "A K4-free graph on seven vertices",
        "title": "A K4-free graph on seven vertices",
        "problem": "Find the maximum number of edges in a graph on seven vertices with no K4.",
        "solution": "Take r=3. Balanced part sizes are 3, 2, 2. The complete tripartite graph has 21 total pairs minus 3+1+1 within-part pairs, for 16 edges. The theorem proves no K4-free graph has more."
      }
    ]
  },
  {
    "id": "borsuk-ulam",
    "no": "12",
    "domain": "Topology",
    "domainSlug": "topology",
    "title": "Borsuk-Ulam and ham sandwich",
    "theorem": "Every continuous map from the sphere S2 to the plane R2 takes the same value at some pair of antipodal points. As a consequence, a line can bisect two planar masses with continuous, strictly positive densities on a common bounded convex support.",
    "statement": "For continuous f:S2→R2, some x satisfies f(x)=f(-x). The ham sandwich consequence bisects two planar masses with one line.",
    "origin": [
      "Karol Borsuk 1933",
      "Stanislaw Ulam posed the question"
    ],
    "elegance": "If antipodes never agree, their difference gives an odd map from the sphere to a circle, whose equator cannot extend over a disk.",
    "proofLead": "Normalize the difference f(x)-f(-x). Its restriction to the equator has odd winding number, yet it extends across a hemisphere and must have winding number zero.",
    "steps": [
      "Assume f(x) is never equal to f(-x). Define g(x) = (f(x)-f(-x))/|f(x)-f(-x)|. Then g:S2→S1 is continuous and g(-x)=-g(x).",
      "Restrict g to the equator. Parametrize the equator by e^(it), 0≤t≤2π, and lift the circle-valued map to a continuous angle θ(t). The antipodal rule implies θ(t+π)-θ(t) is an odd multiple of π.",
      "That difference is continuous and takes values in the discrete set of odd multiples of π, so it is constant. Hence θ(2π)-θ(0) is twice an odd multiple of π, and the equatorial map has odd degree.",
      "But the equator bounds a hemisphere, and g is defined continuously on that whole hemisphere. A map from a disk to a circle restricts to a boundary map of degree zero. This contradiction proves the theorem.",
      "For two planar masses with continuous, strictly positive densities on a common bounded convex support, each direction has a unique continuous offset that halves the first mass. The signed excess of the second mass is continuous in direction and changes sign under reversal, so it is zero for some direction as well."
    ],
    "variants": "The same degree argument proves the corresponding theorem S^n→R^n. The ham sandwich statement extends to n masses in n dimensions.",
    "intuition": "Antipodal symmetry forces an odd turn around the equator; a disk cannot fill a loop that winds an odd number of times.",
    "whyItLives": "A topological obstruction turns symmetry into a coincidence and yields a fair-division theorem.",
    "added": "2024.10.12",
    "glow": 9.4,
    "examples": [
      {
        "label": "Matching temperature and pressure",
        "title": "Matching temperature and pressure",
        "problem": "Let T(x) and P(x) be continuous temperature and pressure fields on a spherical surface. Show that some antipodal locations have equal values of both.",
        "solution": "Apply the theorem to f(x)=(T(x),P(x)). It gives x with f(x)=f(-x), so T and P agree at the antipodal pair."
      },
      {
        "label": "Bisecting two planar densities",
        "title": "Bisecting two planar densities",
        "problem": "Explain why one line can bisect two planar masses that have continuous densities.",
        "solution": "For each direction, slide a line until it halves the first mass. The second mass’s signed excess varies continuously with direction and changes sign after a half-turn. At a zero, the same line halves both."
      }
    ]
  },
  {
    "id": "fermat-two-squares",
    "no": "13",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Fermat’s two-square theorem",
    "theorem": "An odd prime p is a sum of two integer squares exactly when p is congruent to 1 modulo 4.",
    "statement": "For an odd prime p, p=x squared+y squared for integers x,y if and only if p is 1 modulo 4.",
    "origin": [
      "Pierre de Fermat stated the criterion",
      "Classical Gaussian-integer proof"
    ],
    "elegance": "Wilson’s theorem produces a square root of -1; a greatest common divisor in the Gaussian integers turns it into a sum of squares.",
    "proofLead": "Use Wilson’s theorem to find a square root of -1 modulo p, then factor p through the Euclidean domain of Gaussian integers.",
    "steps": [
      "Let p=4k+1. Pairing j with p-j in Wilson’s product gives (p-1)! ≡ ((2k)!) squared modulo p, while Wilson gives (p-1)! ≡ -1. Thus a=(2k)! satisfies a squared ≡ -1 modulo p.",
      "In the Gaussian integers, p divides (a+i)(a-i). The norm N(x+iy)=x squared+y squared is Euclidean: rounding the real and imaginary parts of a quotient leaves a remainder with smaller norm. Hence the Euclidean algorithm and Euclid’s lemma apply.",
      "Let d be a greatest common divisor of p and a+i in the Gaussian integers. It cannot be a unit, or Euclid’s lemma would make p divide a-i, which is impossible because its imaginary part is -1.",
      "The divisor d is not an associate of p, since p does not divide a+i, whose imaginary part is 1. Its norm divides N(p)=p squared, is greater than 1, and is not p squared. Since p is prime, N(d)=p.",
      "Writing d=x+iy gives p=x squared+y squared. Conversely, squares modulo 4 are 0 and 1, so an odd prime that is a sum of two squares cannot be 3 modulo 4."
    ],
    "variants": "A descent proof works directly with integers. The Gaussian-integer method also explains why primes congruent to 3 modulo 4 remain prime in Z[i].",
    "intuition": "A modular square root of -1 lets p split into two conjugate Gaussian factors, each with norm p.",
    "whyItLives": "Congruences, factorials, and a Euclidean algorithm in a larger number system meet in one short factorization.",
    "added": "2024.11.02",
    "glow": 9.5,
    "examples": [
      {
        "label": "Represent 13 as two squares",
        "title": "Represent 13 as two squares",
        "problem": "Show that the prime 13 is a sum of two squares.",
        "solution": "13 is 1 modulo 4, and 13=(3+2i)(3-2i) in the Gaussian integers. Taking norms gives 13=3 squared+2 squared."
      },
      {
        "label": "The prime 7 is not a sum of two squares",
        "title": "The prime 7 is not a sum of two squares",
        "problem": "Prove that 7 cannot equal x squared+y squared for integers x,y.",
        "solution": "Squares modulo 4 are 0 or 1, so a sum of two squares is congruent to 0, 1, or 2 modulo 4. But 7 is 3 modulo 4."
      }
    ]
  },
  {
    "id": "wilson-theorem",
    "no": "14",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Wilson's theorem",
    "theorem": "For an integer p>1, (p-1)! is congruent to -1 modulo p exactly when p is prime.",
    "statement": "The factorial below p leaves remainder p-1 exactly for prime p.",
    "origin": [
      "Ibn al-Haytham c. 1000",
      "John Wilson 1770 stated",
      "Lagrange 1771 proved"
    ],
    "elegance": "Pair each number with its inverse mod p ; only self-inverse residues survive.",
    "proofLead": "Modulo prime, inverses pair up ; only 1 and p-1 are self-inverse, so product collapses to -1.",
    "steps": [
      "If p is composite, let q be a prime divisor of p. Then q<p and q divides (p-1)!. If the factorial were congruent to -1 modulo p, q would divide both (p-1)! and (p-1)!+1, which is impossible.",
      "Now suppose p is prime. Every nonzero residue a modulo p has a unique multiplicative inverse b.",
      "A residue equals its inverse exactly when a squared is 1 modulo p, so the only self-inverse residues are 1 and p-1.",
      "Pair every other residue with its distinct inverse. Each pair has product 1, leaving only 1 times (p-1), which is -1 modulo p."
    ],
    "variants": "Group-theoretic : product of all elements in finite abelian group equals product of order-two elements.",
    "intuition": "In mod p arithmetic every number has a partner that undoes multiplication ; partners cancel, leaving the two wallflowers.",
    "whyItLives": "Pairing argument from group structure ; primality test hidden in factorial.",
    "added": "2024.11.08",
    "glow": 8.6,
    "examples": [
      {
        "label": "Testing primality of 7 with factorial",
        "title": "Testing primality of 7 with factorial",
        "problem": "Compute 6! mod7 to test Wilson.",
        "solution": "6!=720 ; 720 mod7 =6 = -1 mod7 ; so 7 prime ; inverses pairs:1-1,2-4,3-5,6-6 leftover product -1 confirmed."
      },
      {
        "label": "Why 9 fails Wilson",
        "title": "Why 9 fails Wilson",
        "problem": "Show 8! mod9 not -1, proving compositeness.",
        "solution": "8!=40320 ; mod9 =0, not 8 ; divisor 3 divides factorial and modulus ; pairing fails because not all elements invertible mod9."
      }
    ]
  },
  {
    "id": "fermat-little-necklaces",
    "no": "15",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Fermat's little theorem",
    "theorem": "If p is prime then a to p congruent a mod p for integer a.",
    "statement": "a^p - a is divisible by p.",
    "origin": [
      "Fermat 1640",
      "combinatorial necklace proof"
    ],
    "elegance": "Count necklaces with p beads in a colours ; rotation partitions them.",
    "proofLead": "Count circular words of length p ; cyclic rotation groups them into size p unless all beads equal.",
    "steps": [
      "Consider strings length p over alphabet size a, viewed as necklaces up to rotation.",
      "There are a^p total strings. a of them are constant (all beads same colour).",
      "If string not constant, its p rotations are distinct because p is prime ; so nonconstant strings partition into orbits size p.",
      "Thus a^p - a = p times number of orbits ; hence divisible by p."
    ],
    "variants": "Group action proof via cyclic group ; also via binomial expansion and induction.",
    "intuition": "Necklaces with prime length cannot have smaller rotational symmetry ; so they come in p-sized families.",
    "whyItLives": "Number theory becomes combinatorics ; divisibility seen as orbit size.",
    "added": "2024.11.11",
    "glow": 8.7,
    "examples": [
      {
        "label": "2^5 -2 divisible by5",
        "title": "2^5 -2 divisible by5",
        "problem": "Count binary necklaces length5 to see divisibility.",
        "solution": "32 binary strings length5 ; 2 constant ; 30 nonconstant split into orbits size5 under rotation (prime) ; so 30=5·6 divisible ; 2^5=32=2 mod5."
      },
      {
        "label": "3^7 mod7 via necklaces",
        "title": "3^7 mod7 via necklaces",
        "problem": "Show 3^7 -3 divisible by7.",
        "solution": "Alphabet size3 strings length7: 3^7 total ; 3 constant ; remainder splits into orbits size7 ; so 3^7 -3 =7·k ; k=312 ; hence 3^7=3 mod7."
      }
    ]
  },
  {
    "id": "e-irrational",
    "no": "16",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "Irrationality of e",
    "theorem": "e is irrational.",
    "statement": "e cannot be ratio of integers.",
    "origin": [
      "Leonhard Euler 1737",
      "Joseph Fourier elegant proof"
    ],
    "elegance": "Truncate series for e ; remainder is trapped strictly between 0 and 1 over n.",
    "proofLead": "Write e as sum 1 over k! ; assume e = a over b and multiply by b! ; integer plus small fractional remainder contradiction.",
    "steps": [
      "e = sum k=0 to infinity 1 over k! . Assume e = a over b with b positive integer.",
      "Multiply by b! ; b! e = integer N + R where R = sum k=b+1 to infinity b! over k! .",
      "Estimate R : first term 1 over b+1 at most 1/2, tail geometric so 0 < R < 1 for b at least 1.",
      "Left side b! e = a times (b-1)! is integer, but N integer plus R noninteger between 0 and 1 impossible."
    ],
    "variants": "Fourier's estimate sharpens to show e squared also irrational ; Niven extends to pi.",
    "intuition": "Factorial denominators make e almost integer after clearing denominator, but remainder never closes to integer.",
    "whyItLives": "Series remainder trapped between integers ; irrationality from approximation quality.",
    "added": "2024.11.18",
    "glow": 8.5,
    "examples": [
      {
        "label": "Truncating e after 4 terms",
        "title": "Truncating e after 4 terms",
        "problem": "Approximate e with sum to 4 and bound remainder.",
        "solution": "S4=1+1+1/2+1/6+1/24=2.708 ; remainder R <1/24·(1/5+…) <1/24 ; so e in (2.708,2.75) not integer ; b! trick formalises."
      },
      {
        "label": "Why 22/7 fails to be e",
        "title": "Why 22/7 fails to be e",
        "problem": "Show e not exactly 22/7 using factorial method.",
        "solution": "Assume e=22/7 ; multiply by 7! ; integer left, remainder 0<R<1 contradiction ; hence e ≠22/7 ; same works for any a/b."
      }
    ]
  },
  {
    "id": "harmonic-diverges",
    "no": "17",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "Harmonic series diverges",
    "theorem": "Sum 1 over n from 1 to infinity diverges.",
    "statement": "Partial sums grow without bound, albeit slowly.",
    "origin": [
      "Nicole Oresme c. 1350",
      "Mengoli"
    ],
    "elegance": "Group terms in blocks doubling length ; each block sums past one half.",
    "proofLead": "Oresme groups harmonic terms into dyadic blocks each exceeding one half ; infinitely many halves diverge.",
    "steps": [
      "1 + 1/2 + (1/3+1/4) + (1/5+…+1/8) + (1/9+…+1/16) + … .",
      "In block (2^k+1 to 2^{k+1}), there are 2^k terms each at least 1 over 2^{k+1} ; sum at least 1/2.",
      "Thus partial sum after m blocks at least 1 + m over 2.",
      "As m grows, partial sums exceed any bound ; series diverges."
    ],
    "variants": "Integral test compares with log ; condensation test generalises.",
    "intuition": "Harmonic tail thins too slowly ; dyadic clumps reveal that halving never stops accumulating.",
    "whyItLives": "One dyadic grouping defeats intuition that terms going to zero imply convergence.",
    "added": "2024.12.01",
    "glow": 8.2,
    "examples": [
      {
        "label": "Partial sum to 8 exceeds 2.5",
        "title": "Partial sum to 8 exceeds 2.5",
        "problem": "Compute grouping to 8 to see divergence trend.",
        "solution": "H8=1+1/2+(1/3+1/4≈0.58)+(1/5-1/8≈0.5) ≈2.717 ; blocks each ≥0.5, so growth linear in blocks ; slow but unbounded ; H16 adds another ≥0.5."
      },
      {
        "label": "Harmonic vs p=2 convergent",
        "title": "Harmonic vs p=2 convergent",
        "problem": "Contrast harmonic with sum 1/n^2 converging to pi^2/6.",
        "solution": "1/n^2 tail ≤1/n -1/(n+1) telescoping, sum bounded by2 ; harmonic tail ≥1/2 per dyadic block, unbounded ; p>1 converges, p=1 diverges."
      }
    ]
  },
  {
    "id": "am-gm",
    "no": "18",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "AM GM inequality",
    "theorem": "Arithmetic mean at least geometric mean, equality only when all numbers equal.",
    "statement": "For nonnegatives a_i, (a1+…+an)/n at least (a1·…·an) to 1/n.",
    "origin": [
      "Cauchy 1821 forward-backward induction"
    ],
    "elegance": "Normalize the mean to one, then sum the inequality log x ≤ x-1.",
    "proofLead": "Scale the numbers so their arithmetic mean is one. The tangent-line bound for the logarithm then gives the product bound.",
    "steps": [
      "For positive a_1,...,a_n, let A=(a_1+...+a_n)/n and put x_i=a_i/A. Then the x_i are positive and sum to n.",
      "For every x>0, log x ≤ x-1. This follows because x-1-log x has its minimum zero at x=1.",
      "Therefore log(product x_i)=sum log x_i ≤ sum(x_i-1)=0, so product x_i ≤1.",
      "Since a_i=A x_i, their geometric mean is A times (product x_i) to the power 1/n, at most A. Equality holds exactly when every x_i=1, so all a_i are equal.",
      "If some a_i are zero, apply the positive case to a_i+epsilon and let epsilon decrease to zero."
    ],
    "variants": "Jensen’s inequality packages the same argument; the weighted form follows by using weights in the logarithmic sum.",
    "intuition": "At fixed average, the logarithm’s concavity penalizes unequal values and keeps their product below the balanced case.",
    "whyItLives": "Forward-backward replaces blunt induction with elegant self-reference ; foundation for many inequalities.",
    "added": "2024.12.08",
    "glow": 8.9,
    "examples": [
      {
        "label": "Two numbers 3 and 12",
        "title": "Two numbers 3 and 12",
        "problem": "Compare the arithmetic and geometric means of 3 and 12.",
        "solution": "The arithmetic mean is 7.5 and the geometric mean is sqrt(36)=6. Equality fails because the two numbers differ."
      },
      {
        "label": "Four numbers by normalization",
        "title": "Four numbers by normalization",
        "problem": "Use the proof to show that the geometric mean of 1, 2, 4, and 8 is at most their arithmetic mean.",
        "solution": "The arithmetic mean is 15/4. Dividing each number by 15/4 gives four positive values with sum 4. Their product is at most 1 by the logarithm argument, so the original geometric mean is at most 15/4. In fact it is 2 sqrt(2), which is smaller."
      }
    ]
  },
  {
    "id": "euler-polyhedron",
    "no": "19",
    "domain": "Geometry",
    "domainSlug": "geometry",
    "title": "Euler's polyhedron formula",
    "theorem": "For convex polyhedron V - E + F = 2.",
    "statement": "Vertices minus edges plus faces equals two.",
    "origin": [
      "Leonhard Euler 1758",
      "Legendre"
    ],
    "elegance": "Flatten polyhedron without tearing ; keep counting via shelling.",
    "proofLead": "For a connected planar graph, start with a spanning tree and add the remaining edges one at a time.",
    "steps": [
      "View the vertices, edges, and faces of the convex polyhedron as a connected graph drawn on the sphere. Choose a spanning tree; it has V-1 edges and one face.",
      "Add each missing edge in its place in the embedding. Its endpoints are already connected, so the new edge closes a cycle and splits one face into two.",
      "After E-(V-1) edges have been added, the number of faces is F=1+E-(V-1). Rearranging gives V-E+F=2."
    ],
    "variants": "Inductive proof via spanning tree ; topological proof via Euler characteristic.",
    "intuition": "A tree has one face; every extra edge closes a loop and creates exactly one new face.",
    "whyItLives": "A global shape invariant follows from two elementary operations on a planar graph.",
    "added": "2024.12.15",
    "glow": 8.8,
    "examples": [
      {
        "label": "Check the cube",
        "title": "Check the cube",
        "problem": "Verify the formula for a cube.",
        "solution": "A cube has V=8 and E=12. Its spanning tree has 7 edges and one face; adding the remaining 5 edges creates 5 more faces, for F=6. Thus 8-12+6=2."
      },
      {
        "label": "Build a tetrahedron from a tree",
        "title": "Build a tetrahedron from a tree",
        "problem": "Recover the face count of a tetrahedron from a spanning tree.",
        "solution": "The tetrahedron has V=4 and E=6. A spanning tree has 3 edges and one face. The other 3 edges each split a face, giving F=4 and 4-6+4=2."
      }
    ]
  },
  {
    "id": "picks-theorem",
    "no": "20",
    "domain": "Geometry",
    "domainSlug": "geometry",
    "title": "Pick's theorem",
    "theorem": "Area of lattice polygon = I + B/2 - 1.",
    "statement": "Area determined by interior lattice points I and boundary points B.",
    "origin": [
      "Georg Pick 1899"
    ],
    "elegance": "Triangulate to primitive triangles area one half ; additivity gives formula.",
    "proofLead": "Triangulate the polygon using all of its lattice points. Each resulting triangle is primitive, and Euler’s formula counts how many there are.",
    "steps": [
      "Triangulate the lattice polygon so every lattice point on or inside it is a vertex. A maximal such straight-line triangulation has no lattice point inside an edge or triangle.",
      "A triangle with no other lattice points has area 1/2. With one vertex at the origin, write its other vertices as integer vectors u,v. If |det(u,v)|>1, the sublattice they generate has index greater than one. Choose a lattice point w in a nonzero class of the fundamental parallelogram and write w=su+tv with 0≤s,t<1. If s+t≤1, w lies in the triangle. If s+t>1, the lattice point u+v-w lies in the triangle. Either case contradicts primitiveness, so |det(u,v)|=1.",
      "Let T be the number of triangles. The triangulation is a disk with I+B vertices, so Euler’s formula gives (I+B)-E+T=1. Counting triangle-edge incidences gives 3T=2E-B, since interior edges are counted twice and boundary edges once.",
      "Solving these equations gives T=2I+B-2. Since each triangle has area 1/2, the polygon’s area is T/2=I+B/2-1."
    ],
    "variants": "Via inclusion-exclusion ; via Minkowski lattice points.",
    "intuition": "Once every lattice point is a vertex, area is half the number of tiny triangles, and Euler’s formula counts those triangles.",
    "whyItLives": "Discrete lattice points dictate continuous area ; bridge between combinatorics and geometry.",
    "added": "2024.12.20",
    "glow": 8.4,
    "examples": [
      {
        "label": "A 2 by 3 rectangle",
        "title": "A 2 by 3 rectangle",
        "problem": "Use Pick’s theorem to find the area of the rectangle with corners (0,0), (2,0), (2,3), (0,3).",
        "solution": "There are B=10 boundary lattice points and I=2 interior points. The formula gives 2+10/2-1=6, matching the rectangle’s area."
      },
      {
        "label": "A primitive right triangle",
        "title": "A primitive right triangle",
        "problem": "Check Pick’s theorem for the triangle with vertices (0,0), (1,0), and (0,1).",
        "solution": "It has B=3 and I=0, so the area is 0+3/2-1=1/2, the usual right-triangle area."
      }
    ]
  },
  {
    "id": "ramsey-33",
    "no": "21",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "Ramsey R(3,3)=6",
    "theorem": "Any 2-colouring of edges of K6 contains a monochromatic triangle ; K5 does not.",
    "statement": "Among six people, three mutual acquaintances or three mutual strangers always exist.",
    "origin": [
      "Frank Ramsey 1930",
      "Paul Erdos"
    ],
    "elegance": "Pigeonhole on five edges from one vertex forces a triangle.",
    "proofLead": "Pick a vertex ; five incident edges contain three of same colour by pigeonhole ; their endpoints complete the argument.",
    "steps": [
      "Consider vertex v with five neighbours. By pigeonhole, at least three edges from v share colour, say red to a,b,c.",
      "If any edge among a,b,c is red, then it with v forms red triangle.",
      "Otherwise all edges among a,b,c are blue, forming blue triangle.",
      "Thus any colouring of K6 has monochromatic K3. K5 can be 5-cycle plus its complement without such triangle, so R(3,3)>5."
    ],
    "variants": "Probabilistic lower bounds for larger Ramsey numbers ; Schur numbers.",
    "intuition": "From one centre, colour majority forces structure among neighbours.",
    "whyItLives": "Six vertices, one pigeonhole ; inevitability of order in any chaos, cornerstone of Ramsey theory.",
    "added": "2025.01.05",
    "glow": 8.3,
    "examples": [
      {
        "label": "Party of 6 guarantees trio",
        "title": "Party of 6 guarantees trio",
        "problem": "In any group6, show 3 mutual acquaintances or 3 strangers.",
        "solution": "Pick person A ; 5 others split red acquaintance/blue stranger ; pigeonhole gives 3 of same colour to B,C,D ; if B-C edge same colour triangle done else opposite colour triangle among B,C,D."
      },
      {
        "label": "K5 fails",
        "title": "K5 fails",
        "problem": "Give 2-colouring of K5 without monochromatic triangle.",
        "solution": "5-cycle red, its complement 5-cycle blue ; each colour forms C5 no triangle ; so R(3,3)>5 ; together with above R=6."
      }
    ]
  },
  {
    "id": "hall-marriage",
    "no": "22",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "Hall's marriage theorem",
    "theorem": "A family of finite sets has a system of distinct representatives iff every subfamily's union is at least as large.",
    "statement": "Hall's condition is necessary and sufficient for matching.",
    "origin": [
      "Philip Hall 1935"
    ],
    "elegance": "Induction by splitting into tight and non-tight cases ; minimal counterexample yields structure.",
    "proofLead": "Induction on n ; if every proper subfamily has slack, extend greedily ; if some tight subfamily exists, split and apply induction twice.",
    "steps": [
      "Necessity is immediate: k sets need k distinct representatives, so their union must contain at least k elements.",
      "For one set, Hall’s condition says it is nonempty, so a representative exists. Now induct on the number of sets. If every nonempty proper subfamily has union size strictly larger than its size, choose an element from one set and remove both. Every remaining subfamily loses at most one element, so Hall’s condition still holds; apply induction.",
      "Otherwise choose a nonempty proper tight subfamily T whose union has size |T|. By induction, match T to all of its union. For any subfamily R of the remaining sets, Hall’s condition applied to T together with R shows that R still has at least |R| available elements outside the union of T.",
      "Apply induction to the remaining sets and remaining elements, then combine the two matchings. This gives distinct representatives for the full family."
    ],
    "variants": "Deficiency version ; infinite version via compactness ; transversal matroids.",
    "intuition": "Either there is slack everywhere to choose freely, or a tight core must be matched first and remainder shrinks cleanly.",
    "whyItLives": "One condition captures exactly when local distinctness can be global ; basis for matching theory.",
    "added": "2025.01.12",
    "glow": 9,
    "examples": [
      {
        "label": "A matching for three sets",
        "title": "A matching for three sets",
        "problem": "Find distinct representatives for S1={a,b}, S2={a}, S3={b,c}.",
        "solution": "Choose b from S1, a from S2, and c from S3. Each choice is distinct, so this is a system of representatives."
      },
      {
        "label": "Three copies of one element fail",
        "title": "Three copies of one element fail",
        "problem": "Explain why three sets all equal to {a} have no distinct representatives.",
        "solution": "The union of all three sets has size 1, which is smaller than 3. Hall’s necessary condition fails, and indeed there is only one available element."
      }
    ]
  },
  {
    "id": "erdos-szekeres",
    "no": "23",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "Erdos-Szekeres monotone subsequence",
    "theorem": "Any sequence of distinct reals length (r-1)(s-1)+1 contains increasing subsequence length r or decreasing length s.",
    "statement": "Long sequence forces long monotone subsequence.",
    "origin": [
      "Paul Erdos and George Szekeres 1935"
    ],
    "elegance": "Pigeonhole on pair of lengths (up, down) ; Dilworth or monotone chain.",
    "proofLead": "Assign to each position the lengths of longest increasing and decreasing subsequences ending there ; pigeonhole on grid forces large value.",
    "steps": [
      "For each i define a_i = length of longest increasing subsequence ending at i, b_i = length of longest decreasing ending at i.",
      "If some a_i at least r or b_i at least s we are done ; assume contrary all pairs in [1,r-1] x [1,s-1].",
      "Grid has (r-1)(s-1) cells but sequence length (r-1)(s-1)+1 ; so two indices i < j share same (a,b) by pigeonhole.",
      "If x_i < x_j then increasing length could extend, so a_j at least a_i+1 ; if x_i > x_j then b_j at least b_i+1 ; contradiction."
    ],
    "variants": "Dilworth decomposition ; patience sorting proof ; extremal construction via grid order is tight.",
    "intuition": "Each position carries its monotone potential ; too many positions force two to collide, collision allows extension.",
    "whyItLives": "Two parameters capture order ; pigeonhole reveals monotone inevitability, seed of extremal combinatorics.",
    "added": "2025.01.20",
    "glow": 8.9,
    "examples": [
      {
        "label": "A permutation of five forces a monotone triple",
        "title": "A permutation of five forces a monotone triple",
        "problem": "For the sequence 2, 5, 1, 4, 3, compute the two ending lengths used in the proof.",
        "solution": "The pairs (increasing length, decreasing length) are (1,1), (2,1), (1,2), (2,2), (2,2). The repeated pair at positions 4 and 5 is impossible for a sequence with no longer monotone subsequence, and the sequence also visibly contains the decreasing triple 5, 4, 3."
      },
      {
        "label": "A sharp example of length four",
        "title": "A sharp example of length four",
        "problem": "Give a length-four sequence with no increasing or decreasing subsequence of length three.",
        "solution": "The sequence 2,1,4,3 has longest increasing and decreasing subsequences of length 2. Thus the bound (3-1)(3-1)+1=5 cannot be lowered."
      }
    ]
  },
  {
    "id": "konigsberg",
    "no": "24",
    "domain": "Graph Theory",
    "domainSlug": "graph-theory",
    "title": "Konigsberg bridges",
    "theorem": "A connected graph has an Euler trail exactly when it has zero or two odd-degree vertices.",
    "statement": "The Seven Bridges graph has four odd-degree vertices, so no walk can cross every bridge exactly once.",
    "origin": [
      "Leonhard Euler 1736"
    ],
    "elegance": "Parity of vertex degrees decides traversability ; entry equals exit unless start or end.",
    "proofLead": "Model land as vertices, bridges as edges ; count odd-degree vertices ; trail uses two incidences per interior visit.",
    "steps": [
      "In a trail, every visit to an interior vertex pairs an arrival edge with a departure edge. Only the starting and ending vertices can have odd degree, so there may be zero or two odd-degree vertices.",
      "For sufficiency, if there are exactly two odd vertices, add an edge between them. The new connected graph has all degrees even. If there are zero odd vertices, no edge is needed.",
      "In a connected even-degree graph, follow unused edges until returning to the start; one cannot get stuck elsewhere because every arrival leaves an unused departure. If unused edges remain, connectivity ensures that a visited vertex is incident to one. Start another closed walk there and splice it into the first.",
      "Repeating this finite process uses every edge exactly once. Remove the added edge, if present, to obtain an Euler trail in the original graph.",
      "The Seven Bridges graph has four odd degrees, 3, 3, 3, and 1, so it cannot have an Euler trail."
    ],
    "variants": "Eulerian circuit characterization ; Chinese postman.",
    "intuition": "Crossing a bridge uses up parity ; you must be able to arrive and depart equally except possibly at start and finish.",
    "whyItLives": "First graph theory proof ; geography becomes combinatorics via parity.",
    "added": "2025.02.02",
    "glow": 8.6,
    "examples": [
      {
        "label": "A connected graph with two odd vertices has a trail",
        "title": "A connected graph with two odd vertices has a trail",
        "problem": "A graph has edges AB, AC, AD, AE, DE, CD, and BE. Verify that it has an Euler trail.",
        "solution": "The degrees are 4, 2, 2, 3, and 3. The graph is connected and has exactly two odd-degree vertices, D and E, so the criterion guarantees an Euler trail from one to the other."
      },
      {
        "label": "The complete graph K4 has no trail",
        "title": "The complete graph K4 has no trail",
        "problem": "Show that K4 has no Euler trail.",
        "solution": "Each of its four vertices has degree 3, giving four odd-degree vertices. A trail can have at most two, so none exists."
      }
    ]
  },
  {
    "id": "five-color",
    "no": "25",
    "domain": "Graph Theory",
    "domainSlug": "graph-theory",
    "title": "Five colour theorem",
    "theorem": "Every planar graph is 5-colourable.",
    "statement": "Map of regions needs at most five colours so neighbours differ.",
    "origin": [
      "Percy Heawood 1890 after Kempe 1879 attempt"
    ],
    "elegance": "Minimal counterexample with vertex degree at most 5 ; Kempe chain swaps free a colour.",
    "proofLead": "Euler gives low-degree vertex ; induction plus Kempe chain recolouring handles degree 5 case.",
    "steps": [
      "It is enough to consider a connected simple planar graph, since separate components can be coloured independently. Euler’s formula gives E≤3V-6 when V≥3, so some vertex has degree at most 5.",
      "Remove such a vertex v and colour the smaller graph with five colours by induction. If its neighbours use at most four colours, give v a missing colour.",
      "The only remaining case is degree 5 with five differently coloured neighbours v1,...,v5 in cyclic order around v. Consider the subgraph using colours 1 and 3. If v1 and v3 lie in different components, swap those two colours in the component of v1, freeing colour 1 for v.",
      "If v1 and v3 are connected by a path using only colours 1 and 3, that path together with vv1 and vv3 separates the plane. The neighbours v2 and v4 lie on opposite sides, so no path using only colours 2 and 4 connects them.",
      "Swap colours 2 and 4 in the component of v2. This frees colour 2 at v. In either case the colouring extends to v, contradicting any minimal counterexample."
    ],
    "variants": "Kempe's attempted 4-colour proof failed but technique survives ; Appel and Haken 1976 completed 4 colours via computer.",
    "intuition": "Planarity forces a low-degree spot ; chains let you recolour one side of the spot without affecting the other.",
    "whyItLives": "Combines Euler counting with recolouring idea ; gateway to colouring theory.",
    "added": "2025.02.10",
    "glow": 8.5,
    "examples": [
      {
        "label": "A cube needs only two colours",
        "title": "A cube needs only two colours",
        "problem": "Why is the five-colour bound not tight for the cube graph?",
        "solution": "The cube graph is bipartite, so its vertices split into two classes with every edge joining opposite classes. Two colours suffice."
      },
      {
        "label": "The degree-five recolouring step",
        "title": "The degree-five recolouring step",
        "problem": "In the difficult case, why can the five neighbours not all block a fifth colour?",
        "solution": "If the 1-3 chain joins v1 to v3, planarity separates v2 from v4 in the 2-4 subgraph. If it does not, swap the component of v1. One of the two swaps frees a colour at v."
      }
    ]
  },
  {
    "id": "buffon-needle",
    "no": "26",
    "domain": "Probability",
    "domainSlug": "probability",
    "title": "Buffon’s needle and the first-moment method",
    "theorem": "A unit needle dropped on parallel lines two units apart crosses a line with probability 1/pi. Also, if a random object has expected number of forbidden patterns below 1, some outcome has none.",
    "statement": "A geometric average can recover pi, while an expectation below one proves existence.",
    "origin": [
      "Georges-Louis Leclerc, Comte de Buffon 1777",
      "Paul Erdos developed the probabilistic method"
    ],
    "elegance": "Average a geometric crossing count, then use the same expectation principle to certify a combinatorial object.",
    "proofLead": "For the needle, condition on its angle and integrate the allowed center positions. For the graph application, count monochromatic cliques in a random colouring.",
    "steps": [
      "Let the needle length be l and the spacing be d, with l≤d. Its angle θ is uniform on [0,π/2], and its centre is uniform in a strip of width d/2 from the nearest line.",
      "At angle θ, it crosses that line when the centre is within (l/2)sin θ of it. The conditional probability is l sin θ/d. Averaging gives (2/π) times the integral of l sin θ/d from 0 to π/2, namely 2l/(πd). For l=1 and d=2 this is 1/π.",
      "Now colour each edge of K_n red or blue independently with probability 1/2. For each k-set, the chance all its edges have one colour is 2/2 to the power binom(k,2).",
      "By linearity of expectation, the expected number of monochromatic K_k is 2 binom(n,k)/2 to the power binom(k,2). If this is below 1, some colouring has zero such cliques, since the count is a nonnegative integer."
    ],
    "variants": "Alteration method ; Lovasz local lemma strengthens bounds.",
    "intuition": "An average can pin down a constant or force a rare configuration to exist; no explicit construction is needed.",
    "whyItLives": "The same expectation calculation links an eighteenth-century geometric experiment to modern existence proofs.",
    "added": "2025.02.18",
    "glow": 8.7,
    "examples": [
      {
        "label": "Estimate pi from needle crossings",
        "title": "Estimate pi from needle crossings",
        "problem": "A unit needle is dropped 1000 times on lines two units apart and crosses about 318 times. Estimate pi.",
        "solution": "The crossing probability is 1/pi. Equating it to 318/1000 gives pi about 1000/318, or approximately 3.145."
      },
      {
        "label": "A colouring without a monochromatic K4",
        "title": "A colouring without a monochromatic K4",
        "problem": "Use the expectation bound to prove that some red-blue colouring of K6 has no monochromatic K4.",
        "solution": "The expected number is 2 binom(6,4)/2^6 = 30/64, below 1. Since this count is a nonnegative integer, at least one colouring has count zero."
      }
    ]
  },
  {
    "id": "cantor-power-set",
    "no": "27",
    "domain": "Set Theory",
    "domainSlug": "set-theory",
    "title": "Cantor's power set theorem",
    "theorem": "For any set A, there is no surjection onto its power set ; |A| < |P(A)|.",
    "statement": "Power set is strictly larger.",
    "origin": [
      "Georg Cantor 1891"
    ],
    "elegance": "Diagonal set D = {x in A : x not in f(x)} evades every image.",
    "proofLead": "Assume surjection f:A to P(A) ; build diagonal set differing from each f(a) at a.",
    "steps": [
      "Assume f:A -> P(A) is onto.",
      "Define D = { a in A : a not in f(a) }.",
      "Since f onto, D = f(d) for some d in A.",
      "Ask if d in D ; if yes then d not in f(d)=D contradiction ; if no then d in D contradiction. No surjection exists."
    ],
    "variants": "Cantor paradox ; Russell's paradox ; diagonal lemma in logic.",
    "intuition": "Self-reference defeats enumeration ; set that asks whether it contains itself cannot be listed.",
    "whyItLives": "Two lines create hierarchy of infinities ; foundation for incompleteness.",
    "added": "2025.03.01",
    "glow": 9.1,
    "examples": [
      {
        "label": "No surjection from N to its power set",
        "title": "No surjection from N to its power set",
        "problem": "Show N cannot list all subsets of N.",
        "solution": "Assume f:N→P(N) onto ; D={n: n not in f(n)} ; D subset N so D=f(d) for some d ; d in D iff d not in f(d)=D contradiction ; same diagonal as Cantor."
      },
      {
        "label": "Finite example A={1,2}",
        "title": "Finite example A={1,2}",
        "problem": "Illustrate diagonal set on small set.",
        "solution": "A 2 elements power set size4 >2 ; try f1={1},f2={2} ; D={x:x∉f(x)} ; if f1={1} then1∉D, f2={2} 2∉D so D={} not in image ; no onto."
      }
    ]
  },
  {
    "id": "birthday-paradox",
    "no": "28",
    "domain": "Probability",
    "domainSlug": "probability",
    "title": "Birthday paradox",
    "theorem": "In a room of 23 people, probability of shared birthday exceeds one half.",
    "statement": "Collision becomes likely far below number of days.",
    "origin": [
      "Richard von Mises 1939"
    ],
    "elegance": "Complement and product estimate turns into exponential; square root threshold appears.",
    "proofLead": "Compute no-collision probability as product (365 over 365)(364 over 365)… ; bound with 1 - x at most e to -x.",
    "steps": [
      "The probability that n birthdays are all distinct is product_(k=0)^(n-1)(365-k)/365.",
      "Use 1-x ≤ exp(-x) on each factor. For n=23 this gives an upper bound exp(-253/365), just above one half, so this estimate alone is not quite enough.",
      "Multiplying the 22 nontrivial factors directly gives 365·364·...·343 divided by 365 to the power 23, about 0.4927. This is below one half, so the collision probability is above one half.",
      "For m equally likely days, the exponent in the first estimate is -n(n-1)/(2m), so collisions become likely when n is on the scale of sqrt(m)."
    ],
    "variants": "General birthday bound ; hash collisions ; occupancy.",
    "intuition": "Pairs grow quadratically ; many chances for coincidence even when birthdays seem sparse.",
    "whyItLives": "Intuition fails ; elegant estimate reveals square-root threshold ubiquitous in combinatorics and cryptography.",
    "added": "2025.03.10",
    "glow": 8,
    "examples": [
      {
        "label": "The 23-person calculation",
        "title": "The 23-person calculation",
        "problem": "Estimate the collision probability for 23 people.",
        "solution": "The no-collision probability is 365/365 times 364/365 and so on through 343/365, about 0.4927. Its complement is about 0.5073."
      },
      {
        "label": "A thousand possible hash values",
        "title": "A thousand possible hash values",
        "problem": "About how many independent keys give a one-half chance of a collision among 1000 equally likely hash values?",
        "solution": "The approximation exp(-n(n-1)/2000)=1/2 gives n about sqrt(2000 ln 2), or 37.2. The first integer near the threshold is 38."
      }
    ]
  },
  {
    "id": "cauchy-schwarz",
    "no": "29",
    "domain": "Algebra",
    "domainSlug": "algebra",
    "title": "Cauchy-Schwarz inequality",
    "theorem": "Absolute inner product at most product of norms ; |<x,y>| at most ||x||·||y||.",
    "statement": "Equality iff vectors linearly dependent.",
    "origin": [
      "Augustin-Louis Cauchy 1821",
      "Hermann Schwarz 1888"
    ],
    "elegance": "One quadratic in t is always nonnegative ; its discriminant must be nonpositive.",
    "proofLead": "Consider norm squared of x - t y as quadratic in t ; minimise or compute discriminant.",
    "steps": [
      "For real case define p(t)= ||x - t y|| squared = ||x|| squared -2t <x,y> + t squared ||y|| squared at least 0 for all t.",
      "If y=0 inequality trivial ; else p(t) is quadratic in t with nonnegative values.",
      "Hence discriminant at most 0 ; 4<x,y> squared -4||x|| squared||y|| squared at most 0.",
      "Rearrange to |<x,y>| at most ||x||·||y||. Complex case with phase rotation."
    ],
    "variants": "Gram determinant ; Jensen ; Hölder generalises.",
    "intuition": "Projection of x onto y cannot exceed its length ; quadratic captures geometry algebraically.",
    "whyItLives": "One quadratic encodes angle ; most used inequality in analysis and linear algebra.",
    "added": "2025.03.18",
    "glow": 8.8,
    "examples": [
      {
        "label": "Vectors (1,2) and (3,4)",
        "title": "Vectors (1,2) and (3,4)",
        "problem": "Check Cauchy-Schwarz for x=(1,2) and y=(3,4).",
        "solution": "The inner product is 11. The norms are sqrt(5) and 5, whose product is 5sqrt(5), about 11.18. Hence 11≤5sqrt(5)."
      },
      {
        "label": "Equality for dependent vectors",
        "title": "Equality for dependent vectors",
        "problem": "Check equality for x=(1,2) and y=(2,4).",
        "solution": "The inner product is 10 and the product of the norms is sqrt(5) times sqrt(20), also 10. The vectors are scalar multiples, exactly the equality case."
      }
    ]
  },
  {
    "id": "isoperimetric-inequality",
    "no": "30",
    "domain": "Geometry",
    "domainSlug": "geometry",
    "title": "Isoperimetric inequality",
    "theorem": "For a smooth simple closed plane curve of length L enclosing area A, 4 pi A ≤ L squared, with equality only for a circle.",
    "statement": "Among smooth plane curves of fixed length, the circle encloses the greatest area.",
    "origin": [
      "Jakob Steiner 1838 symmetrization idea",
      "Hurwitz 1902 Fourier proof"
    ],
    "elegance": "Green’s formula, Cauchy-Schwarz, and the periodic Wirtinger inequality leave equality only in the first Fourier mode.",
    "proofLead": "Parametrize the curve by arclength, subtract its mean position, and bound its signed area by its squared length.",
    "steps": [
      "Write the arclength parametrization as r(t)=(x(t),y(t)) for 0≤t≤L. Green’s formula gives 2A=|integral of (x y' - y x') dt|.",
      "Subtract the mean values of x and y; this does not change the area integral. Cauchy-Schwarz gives 2A ≤ (integral |r-mean(r)| squared) to the power 1/2 times (integral |r'| squared) to the power 1/2.",
      "Arclength parametrization gives |r'|=1, so the second factor is sqrt(L). The periodic Wirtinger inequality for mean-zero functions gives integral |r-mean(r)| squared ≤ (L/2pi) squared times integral |r'| squared = L cubed/(4pi squared).",
      "Combining the bounds gives 2A ≤ L squared/(2pi), hence 4pi A ≤ L squared. Equality in Wirtinger requires only the first Fourier mode, which parametrizes a circle."
    ],
    "variants": "Steiner symmetrization gives a geometric route. Higher-dimensional analogues involve surface area and volume.",
    "intuition": "After fixing speed, any higher oscillation increases the boundary energy without adding enough signed area.",
    "whyItLives": "A sharp inequality identifies the extremal shape through the equality case, not just the bound.",
    "added": "2025.03.25",
    "glow": 8.7,
    "examples": [
      {
        "label": "Square compared with a circle",
        "title": "Square compared with a circle",
        "problem": "Compare areas of a square and a circle, each with perimeter 4.",
        "solution": "The square has area 1. The circle has radius 2/pi and area 4/pi, about 1.273. For the square, 4pi A=4pi<16=L squared; the circle attains equality."
      },
      {
        "label": "Equality for a circle",
        "title": "Equality for a circle",
        "problem": "Verify equality for a circle of radius r.",
        "solution": "Its length is 2pi r and its area is pi r squared. Thus 4pi A=4pi squared r squared=L squared."
      }
    ]
  },
  {
    "id": "quadratic-reciprocity",
    "no": "31",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Quadratic reciprocity",
    "theorem": "For odd primes p, q, Legendre symbol (p over q)(q over p)= (-1) to (p-1)(q-1)/4.",
    "statement": "Solvability of x squared = p mod q mirrors solvability of x squared = q mod p up to sign.",
    "origin": [
      "Gauss 1796 first proof",
      "Eisenstein lattice point proof"
    ],
    "elegance": "Count lattice points under two lines ; symmetry swaps counts.",
    "proofLead": "Gauss’s lemma converts each Legendre symbol to a parity count. A rectangle split by a diagonal shows that the two counts add to a simple product.",
    "steps": [
      "For distinct odd primes p and q, put m=(p-1)/2 and n=(q-1)/2. Gauss’s lemma says (q/p)=(-1)^N, where N counts the i from 1 to m for which the least positive residue of iq modulo p exceeds p/2.",
      "Let S(p,q)=sum_{i=1}^m floor(iq/p). Summing iq=p floor(iq/p)+r_i over i and reducing modulo 2 shows S(p,q)≡N modulo 2: the absolute residues min(r_i,p-r_i) permute 1,...,m.",
      "The same argument gives (p/q)=(-1)^S(q,p). In the rectangle 1≤i≤m, 1≤j≤n, no lattice point lies on the line j=iq/p, since p and q are distinct primes.",
      "Each lattice point lies on exactly one side of that line. The points below it are counted by S(p,q), and the points above it by S(q,p). Therefore S(p,q)+S(q,p)=mn.",
      "Multiplying the two Gauss-lemma signs gives (q/p)(p/q)=(-1)^(mn)=(-1)^((p-1)(q-1)/4), which is quadratic reciprocity."
    ],
    "variants": "Gauss gave eight proofs ; via Gauss sums, via cyclotomy.",
    "intuition": "Two complementary lattice counts have a fixed total; their parity controls whether quadratic residuosity is preserved or reversed.",
    "whyItLives": "Reciprocity law is deep but Eisenstein makes it visual ; lattice geometry encodes arithmetic.",
    "added": "2025.04.01",
    "glow": 9.2,
    "examples": [
      {
        "label": "Compare 3 modulo 7 and 7 modulo 3",
        "title": "Compare 3 modulo 7 and 7 modulo 3",
        "problem": "Check quadratic reciprocity for p=3 and q=7.",
        "solution": "The squares modulo 7 are 1, 2, and 4, so (3/7)=-1. Since 7≡1 modulo 3, (7/3)=1. Their product is -1, matching (-1)^((2)(6)/4)=-1."
      },
      {
        "label": "Count a 5 by 11 rectangle",
        "title": "Count a 5 by 11 rectangle",
        "problem": "Compute the two lattice counts for p=5 and q=11.",
        "solution": "S(5,11)=floor(11/5)+floor(22/5)=2+4=6. Also S(11,5)=0+0+1+1+2=4. Their sum is 10, equal to ((5-1)/2)((11-1)/2)."
      }
    ]
  },
  {
    "id": "rsa-euler-theorem",
    "no": "32",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Euler's theorem and RSA idea",
    "theorem": "If gcd(a,m)=1 then a to the power phi(m) is congruent to 1 modulo m. This is the group-theoretic step behind RSA.",
    "statement": "The invertible residues modulo m form a finite group of size phi(m).",
    "origin": [
      "Leonhard Euler 1763",
      "Rivest Shamir Adleman 1977 application"
    ],
    "elegance": "Residues coprime to m form a group ; Lagrange makes order divide group size.",
    "proofLead": "Units mod m form group size phi(m) ; order of element divides group order.",
    "steps": [
      "Let U be the residues modulo m that are coprime to m. They form a group under multiplication and contain phi(m) elements.",
      "For a in U, the powers of a form a subgroup. Lagrange’s theorem says its order divides phi(m), so a to the power phi(m) is congruent to 1 modulo m.",
      "For RSA, let N=pq for distinct primes and choose positive e,d with ed=1+k(p-1)(q-1). For a message M, if p divides M then M to the power ed is 0 modulo p; otherwise Fermat’s theorem gives M to the power ed congruent to M modulo p.",
      "The same argument works modulo q. Since p and q are coprime, the Chinese remainder theorem gives M to the power ed congruent to M modulo N."
    ],
    "variants": "Fermat little is case m prime ; Carmichael refines exponent.",
    "intuition": "Multiplication permutes the units; finite group structure makes every exponent cycle close, and the two prime moduli recombine by the Chinese remainder theorem.",
    "whyItLives": "One group observation unifies Fermat, Euler, and modern cryptography.",
    "added": "2025.04.10",
    "glow": 8.5,
    "examples": [
      {
        "label": "Compute 3 to phi(10)",
        "title": "Compute 3 to phi(10)",
        "problem": "Verify Euler’s theorem for a=3 and m=10.",
        "solution": "The units modulo 10 are 1, 3, 7, 9, so phi(10)=4. Then 3 to the fourth is 81, congruent to 1 modulo 10."
      },
      {
        "label": "A small RSA example",
        "title": "A small RSA example",
        "problem": "Take p=3, q=11, N=33, e=3, d=7, and message M=4. Encrypt and decrypt.",
        "solution": "The ciphertext is 4 cubed modulo 33, which is 31. Raising 31 to the seventh power modulo 33 gives 4. Here ed=21=1+20, and 20=phi(33), so the theorem guarantees recovery."
      }
    ]
  },
  {
    "id": "bezout-identity",
    "no": "33",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "Bezout’s identity",
    "theorem": "For integers a and b not both zero, there are integers x and y such that ax+by=gcd(a,b).",
    "statement": "The greatest common divisor is an integer linear combination of the two inputs.",
    "origin": [
      "Euclid",
      "The extended Euclidean algorithm"
    ],
    "elegance": "Repeated division already records the coefficients needed to reverse the computation.",
    "proofLead": "Run the Euclidean algorithm, then read its remainder equations backward.",
    "steps": [
      "Start with r0=|a| and r1=|b|, and repeatedly divide: r(j-1)=q(j)r(j)+r(j+1), until the remainder is zero.",
      "The initial remainders are integer linear combinations of a and b, since each is a or b up to sign.",
      "Each new remainder satisfies r(j+1)=r(j-1)-q(j)r(j). Inductively, every remainder is an integer linear combination of a and b.",
      "The last nonzero remainder g divides the preceding remainder and, by reversing the divisions, every earlier one. Every common divisor also divides every remainder. Hence g=gcd(a,b).",
      "Since g is one of the integer linear combinations, there are integers x,y with ax+by=gcd(a,b)."
    ],
    "variants": "The same algorithm decides whether ax+by=c has an integer solution: exactly when gcd(a,b) divides c.",
    "intuition": "The division algorithm reduces the numbers while preserving the set of their integer combinations.",
    "whyItLives": "A computation of a gcd doubles as a certificate that the answer is exact.",
    "added": "2026.10.20",
    "glow": 9.1,
    "examples": [
      {
        "label": "A linear combination for 252 and 198",
        "title": "A linear combination for 252 and 198",
        "problem": "Find integers x,y with 252x+198y=gcd(252,198).",
        "solution": "The divisions are 252=198+54, 198=3·54+36, 54=36+18. Back-substitute: 18=54-36=4·54-198=4·252-5·198. Thus the gcd is 18."
      },
      {
        "label": "A combination equal to 1",
        "title": "A combination equal to 1",
        "problem": "Express 1 as an integer combination of 35 and 64.",
        "solution": "The Euclidean algorithm gives 64=35+29, 35=29+6, 29=4·6+5, 6=5+1. Back-substitution yields 1=11·35-6·64."
      }
    ]
  },
  {
    "id": "handshake-lemma",
    "no": "34",
    "domain": "Graph Theory",
    "domainSlug": "graph-theory",
    "title": "The handshaking lemma",
    "theorem": "In every finite graph, the sum of the vertex degrees equals twice the number of edges. In particular, the number of odd-degree vertices is even.",
    "statement": "Each edge contributes two endpoints to the total degree count.",
    "origin": [
      "Leonhard Euler",
      "A standard counting lemma in graph theory"
    ],
    "elegance": "Count the same incidences once by vertex and once by edge.",
    "proofLead": "Count pairs consisting of an edge and one of its endpoints in two ways.",
    "steps": [
      "Let I be the set of incidences (v,e) where vertex v is an endpoint of edge e.",
      "Counting by vertices gives |I|=sum_v deg(v). Counting by edges gives |I|=2|E|, since each edge has exactly two endpoints.",
      "Thus the degree sum is even. A sum of integers is even exactly when it contains an even number of odd terms, so the number of odd-degree vertices is even."
    ],
    "variants": "For directed graphs, counting incoming and outgoing incidences gives equal total indegree and total outdegree.",
    "intuition": "Every handshake has two participants; no single vertex can account for an odd endpoint left over.",
    "whyItLives": "A one-line count supplies a necessary condition for paths, circuits, and degree sequences.",
    "added": "2026.10.20",
    "glow": 8.8,
    "examples": [
      {
        "label": "Check a four-edge graph",
        "title": "Check a four-edge graph",
        "problem": "A graph has edges AB, AC, BC, and CD. Verify the lemma.",
        "solution": "The degrees are 2, 2, 3, and 1, which sum to 8=2·4. The two odd-degree vertices are C and D."
      },
      {
        "label": "A degree sequence that cannot occur",
        "title": "A degree sequence that cannot occur",
        "problem": "Can a finite graph have degrees 3, 2, 2, 2, and 2?",
        "solution": "The sum is 11, but every degree sum is twice the number of edges and therefore even. No such graph exists."
      }
    ]
  },
  {
    "id": "intermediate-value-theorem",
    "no": "35",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "The intermediate value theorem",
    "theorem": "If f is continuous on [a,b] with f(a)<0<f(b), then f(c)=0 for some c in [a,b].",
    "statement": "A continuous function cannot pass from a negative value to a positive one without taking the value zero.",
    "origin": [
      "Bernard Bolzano 1817",
      "Augustin-Louis Cauchy"
    ],
    "elegance": "The least upper bound property locates the crossing without searching for it.",
    "proofLead": "Take the supremum of the points where the function is negative and use continuity on both sides.",
    "steps": [
      "Let S={x in [a,b]: f(x)<0}. It is nonempty because f(a)<0, and is bounded above because S⊆[a,b]. Set c=sup S.",
      "If f(c)>0, continuity makes f positive throughout a small interval around c. Points of S must approach c from the left by the definition of supremum, a contradiction.",
      "If f(c)<0, continuity makes f negative just to the right of c. Since f(b)>0, c<b; those right-hand points would belong to S, contradicting that c is an upper bound.",
      "The only remaining possibility is f(c)=0."
    ],
    "variants": "The same argument gives every intermediate value between f(a) and f(b). It is equivalent to a completeness property of the real numbers.",
    "intuition": "A boundary point between negative and positive values cannot itself stay on either side.",
    "whyItLives": "Completeness turns an informal idea of crossing into a precise existence proof.",
    "added": "2026.10.20",
    "glow": 9.2,
    "examples": [
      {
        "label": "A cube root exists between 1 and 2",
        "title": "A cube root exists between 1 and 2",
        "problem": "Prove that x cubed=2 has a solution between 1 and 2.",
        "solution": "For f(x)=x cubed-2, f(1)=-1 and f(2)=6. The polynomial is continuous, so the theorem gives c in (1,2) with c cubed=2."
      },
      {
        "label": "A root of cos x minus x",
        "title": "A root of cos x minus x",
        "problem": "Show that cos x=x for some x between 0 and 1.",
        "solution": "For f(x)=cos x-x, f(0)=1>0 and f(1)=cos 1-1<0. Continuity gives a zero in (0,1)."
      }
    ]
  },
  {
    "id": "tournament-hamiltonian-path",
    "no": "36",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "A Hamiltonian path in every tournament",
    "theorem": "Every tournament contains a directed Hamiltonian path.",
    "statement": "If every pair of vertices is joined by exactly one directed edge, there is a directed path visiting every vertex once.",
    "origin": [
      "Laszlo Redei 1934"
    ],
    "elegance": "Insert one new vertex into the unique place where the edge directions switch.",
    "proofLead": "Induct on the number of vertices and insert the last vertex into an existing directed path.",
    "steps": [
      "The claim is true for one vertex. Remove a vertex v from a tournament on n vertices; by induction, the remaining vertices have a directed path v1→v2→...→v(n-1).",
      "If v points to v1, put v at the start. If v(n-1) points to v, put v at the end.",
      "Otherwise v1 points to v, while v does not point to v(n-1). Along the path, take the first index j for which v points to vj.",
      "Then j>1 and v(j-1) points to v, while v points to vj. Insert v between those two vertices. The result is a directed path through every vertex."
    ],
    "variants": "Every tournament also has a directed Hamiltonian cycle if it is strongly connected.",
    "intuition": "Along the path, the direction relative to the new vertex changes from incoming to outgoing; insert at that boundary.",
    "whyItLives": "A local insertion argument gives a global ordering for every orientation of a complete graph.",
    "added": "2026.10.20",
    "glow": 8.9,
    "examples": [
      {
        "label": "A path through four teams",
        "title": "A path through four teams",
        "problem": "A tournament has A→B, A→C, A→D, B→C, C→D, and D→B. Give a Hamiltonian path.",
        "solution": "The sequence A→B→C→D is a directed path and visits all four vertices exactly once."
      },
      {
        "label": "Insert a vertex into a path",
        "title": "Insert a vertex into a path",
        "problem": "An existing path is a→c→d. A new vertex b satisfies a→b and b→c. Insert b.",
        "solution": "The path becomes a→b→c→d. The directions involving d do not matter, because the new edges used in the path are a→b and b→c."
      }
    ]
  },
  {
    "id": "cauchy-condensation",
    "no": "37",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "Cauchy’s condensation test",
    "theorem": "For a nonincreasing sequence a_n of positive numbers, the series sum a_n converges exactly when sum over k≥0 of 2^k a_(2^k) converges.",
    "statement": "A decreasing series can be tested by grouping terms into blocks whose lengths double.",
    "origin": [
      "Augustin-Louis Cauchy"
    ],
    "elegance": "Each dyadic block is trapped between one half and all of the corresponding condensed term.",
    "proofLead": "Compare the terms in each block from 2^k through 2^(k+1)-1 with the first and last terms of that block.",
    "steps": [
      "In the block 2^k≤n<2^(k+1), monotonicity gives a_(2^(k+1))≤a_n≤a_(2^k).",
      "There are 2^k terms in the block, so 2^k a_(2^(k+1))≤sum_block a_n≤2^k a_(2^k).",
      "The lower bound is one half of the next condensed term: 2^k a_(2^(k+1))=(1/2)·2^(k+1)a_(2^(k+1)).",
      "Thus the original series and the condensed series have block sums within a factor of two. One converges exactly when the other does."
    ],
    "variants": "The integral test is another way to compare a decreasing series with geometric blocks.",
    "intuition": "A decreasing sequence changes slowly enough that every doubling block behaves like its first term repeated 2^k times.",
    "whyItLives": "It reduces a delicate infinite sum to a transparent geometric scale comparison.",
    "added": "2026.10.20",
    "glow": 8.7,
    "examples": [
      {
        "label": "The harmonic series diverges",
        "title": "The harmonic series diverges",
        "problem": "Use condensation to test sum 1/n.",
        "solution": "For a_n=1/n, the condensed term is 2^k/2^k=1. The condensed series is 1+1+1+..., so the harmonic series diverges."
      },
      {
        "label": "A p-series",
        "title": "A p-series",
        "problem": "Use condensation to test sum 1/n to the power p for p>0.",
        "solution": "The condensed terms are 2^k/(2^k)^p=2^(k(1-p)). This geometric series converges when p>1 and diverges when 0<p≤1."
      }
    ]
  },
  {
    "id": "sum-odd-numbers-squares",
    "no": "38",
    "domain": "Combinatorics",
    "domainSlug": "combinatorics",
    "title": "The sum of the first odd numbers",
    "theorem": "1+3+5+...+(2n-1)=n squared for every positive integer n.",
    "statement": "The first n odd numbers add to the area of an n by n square.",
    "origin": [
      "A classical arithmetic identity"
    ],
    "elegance": "Each new odd number is exactly the L-shaped border added to grow a square by one row and one column.",
    "proofLead": "Build larger squares by attaching successive L-shaped layers to the smaller square inside.",
    "steps": [
      "A 1 by 1 square has one unit cell, matching the first odd number 1.",
      "When an (n-1) by (n-1) square grows to n by n, the added border contains n squared-(n-1) squared=2n-1 unit cells.",
      "The successive borders have sizes 1,3,5,...,2n-1 and tile the n by n square without overlap.",
      "Therefore their total is the area n squared."
    ],
    "variants": "The same identity follows by induction or by pairing the first and last terms of the arithmetic progression.",
    "intuition": "Odd numbers are the successive square-shaped layers.",
    "whyItLives": "A numerical sum becomes a picture of how area grows one unit at a time.",
    "added": "2026.10.20",
    "glow": 8.4,
    "examples": [
      {
        "label": "The first five odd numbers",
        "title": "The first five odd numbers",
        "problem": "Add 1+3+5+7+9 using the theorem.",
        "solution": "There are five terms, so the sum is 5 squared=25."
      },
      {
        "label": "Which square is 1+3+...+39?",
        "title": "Which square is 1+3+...+39?",
        "problem": "Evaluate 1+3+5+...+39.",
        "solution": "The last term is 39=2n-1, so n=20. The sum is 20 squared=400."
      }
    ]
  },
  {
    "id": "reciprocal-primes-diverge",
    "no": "39",
    "domain": "Number Theory",
    "domainSlug": "number-theory",
    "title": "The reciprocals of primes diverge",
    "theorem": "The sum of 1/p over all primes p diverges.",
    "statement": "Prime reciprocals have an infinite total, even though they become sparse.",
    "origin": [
      "Leonhard Euler 1737"
    ],
    "elegance": "A finite Euler product dominates the harmonic series; a convergent prime sum would keep every such product bounded.",
    "proofLead": "Expand the product over small primes, then compare its logarithm with the assumed sum of prime reciprocals.",
    "steps": [
      "For each N, expand the finite product product_(p≤N)(1-1/p)^(-1) as geometric series. Unique factorization shows it contains 1/n for every n≤N, so it is at least H_N=sum_(n≤N)1/n.",
      "Suppose instead that sum_p 1/p converges. For 0≤x≤1/2, -log(1-x)≤x+2x squared. Taking logarithms, the finite product has logarithm at most sum_(p≤N)(1/p+2/p squared).",
      "The first sum is bounded by the supposition. The second is bounded by 2 sum_(n≥2)1/n squared, which converges. Thus all the finite products would be bounded by one fixed constant.",
      "But H_N is unbounded: grouping terms from 2^k through 2^(k+1)-1 gives at least 1/2 per block. Since each product is at least H_N, the products cannot be bounded. Contradiction."
    ],
    "variants": "Euler’s product also leads to sharper estimates for the density of primes and the size of their reciprocal sum.",
    "intuition": "Every integer is assembled from primes, so a bounded supply of prime reciprocals would make the harmonic sum bounded too.",
    "whyItLives": "Unique factorization turns an infinite sum over all integers into a product over primes.",
    "added": "2026.10.20",
    "glow": 9.3,
    "examples": [
      {
        "label": "A finite product bounds H5",
        "title": "A finite product bounds H5",
        "problem": "Compare H5 with the product over primes at most 5.",
        "solution": "The product is (1-1/2)^(-1)(1-1/3)^(-1)(1-1/5)^(-1)=15/4. The harmonic sum H5=137/60 is smaller, as the expansion argument predicts."
      },
      {
        "label": "Why a bounded prime sum is impossible",
        "title": "Why a bounded prime sum is impossible",
        "problem": "If sum_p 1/p were at most C, what would the proof imply about every harmonic partial sum?",
        "solution": "The logarithm estimate would bound every finite prime product by exp(C+2 sum_(n≥2)1/n squared), a constant independent of N. Since H_N is below that product, all H_N would be bounded, contradicting their divergence."
      }
    ]
  },
  {
    "id": "bolzano-weierstrass",
    "no": "40",
    "domain": "Analysis",
    "domainSlug": "analysis",
    "title": "Bolzano-Weierstrass theorem",
    "theorem": "Every bounded sequence of real numbers has a convergent subsequence.",
    "statement": "Boundedness guarantees at least one accumulation point.",
    "origin": [
      "Bernard Bolzano 1817",
      "Karl Weierstrass"
    ],
    "elegance": "Repeated bisection traps infinitely many terms in intervals whose lengths shrink to zero.",
    "proofLead": "Halve an interval containing infinitely many terms, retain a half that still contains infinitely many, and select a term at each stage.",
    "steps": [
      "Place the bounded sequence inside a closed interval I0. At least one of the two closed halves contains infinitely many terms; call it I1.",
      "Repeat the bisection. This gives nested closed intervals I0⊇I1⊇I2⊇... with infinitely many sequence terms in each and lengths tending to zero.",
      "Choose increasing indices n_k so that x_(n_k) lies in I_k. This is possible because each I_k contains infinitely many terms.",
      "The nested intervals have exactly one common point x. Since both x and x_(n_k) lie in I_k, their distance is at most the length of I_k, which tends to zero. Thus x_(n_k) converges to x."
    ],
    "variants": "In R^d the same argument uses nested boxes; in metric spaces, sequential compactness is the corresponding notion.",
    "intuition": "An infinite sequence cannot escape every half of a bounded interval; one narrowing branch captures infinitely many terms.",
    "whyItLives": "A simple geometric selection proves compactness phenomena that power analysis.",
    "added": "2026.10.20",
    "glow": 9,
    "examples": [
      {
        "label": "An oscillating sequence has a convergent subsequence",
        "title": "An oscillating sequence has a convergent subsequence",
        "problem": "Find convergent subsequences of x_n=(-1)^n.",
        "solution": "The even-indexed terms are all 1, so they converge to 1. The odd-indexed terms are all -1, so they converge to -1. The theorem guarantees at least one, while this example shows there may be several."
      },
      {
        "label": "A bounded integer sequence",
        "title": "A bounded integer sequence",
        "problem": "Show that every bounded sequence of integers has a constant subsequence.",
        "solution": "A bounded interval contains only finitely many integers. Infinitely many sequence terms are distributed among those finitely many values, so one value occurs infinitely often and gives a constant subsequence."
      }
    ]
  }
];
