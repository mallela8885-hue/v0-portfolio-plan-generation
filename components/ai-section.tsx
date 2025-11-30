"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Send, Sparkles, RefreshCw } from "lucide-react"

const mcqQuestions = [
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correct: 1,
    explanation:
      "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.",
  },
  {
    question: "Which data structure uses LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correct: 1,
    explanation:
      "Stack follows Last-In-First-Out (LIFO) principle where the last element added is the first one to be removed.",
  },
  {
    question: "What does REST stand for?",
    options: [
      "Representational State Transfer",
      "Remote Execution State Transfer",
      "Resource State Transfer",
      "Rapid Execution System Transfer",
    ],
    correct: 0,
    explanation:
      "REST stands for Representational State Transfer, an architectural style for designing networked applications.",
  },
  {
    question: "Which hook is used for side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correct: 1,
    explanation:
      "useEffect is the React hook designed for handling side effects like data fetching, subscriptions, and DOM mutations.",
  },
]

export function AISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === mcqQuestions[currentQuestion].correct) {
      setScore((prev) => prev + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < mcqQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizComplete(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizComplete(false)
  }

  const question = mcqQuestions[currentQuestion]

  return (
    <section id="ai" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
            >
              Interactive Demo
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">AI-Powered Quiz Bot</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Test your programming knowledge with this interactive AI quiz demo
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">Quiz Bot</CardTitle>
                  </div>
                  <Badge variant="secondary">
                    {quizComplete ? "Complete" : `${currentQuestion + 1}/${mcqQuestions.length}`}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {!quizComplete ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Question */}
                    <div className="mb-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-lg font-medium">{question.question}</p>
                      </div>

                      {/* Options */}
                      <div className="space-y-3">
                        {question.options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: showResult ? 1 : 1.02 }}
                            whileTap={{ scale: showResult ? 1 : 0.98 }}
                            onClick={() => handleAnswer(index)}
                            disabled={showResult}
                            className={`w-full p-4 rounded-lg text-left transition-all border ${
                              showResult
                                ? index === question.correct
                                  ? "bg-green-500/20 border-green-500 text-green-400"
                                  : index === selectedAnswer
                                    ? "bg-red-500/20 border-red-500 text-red-400"
                                    : "bg-secondary/50 border-border text-muted-foreground"
                                : "bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary"
                            }`}
                          >
                            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Result */}
                    {showResult && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
                        <div
                          className={`p-4 rounded-lg ${
                            selectedAnswer === question.correct
                              ? "bg-green-500/10 border border-green-500/30"
                              : "bg-red-500/10 border border-red-500/30"
                          }`}
                        >
                          <p
                            className={`font-medium mb-2 ${
                              selectedAnswer === question.correct ? "text-green-400" : "text-red-400"
                            }`}
                          >
                            {selectedAnswer === question.correct ? "Correct!" : "Incorrect!"}
                          </p>
                          <p className="text-sm text-muted-foreground">{question.explanation}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Next Button */}
                    {showResult && (
                      <Button onClick={nextQuestion} className="w-full gap-2">
                        {currentQuestion < mcqQuestions.length - 1 ? (
                          <>
                            Next Question
                            <Send className="h-4 w-4" />
                          </>
                        ) : (
                          "See Results"
                        )}
                      </Button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">
                      {score === mcqQuestions.length ? "🏆" : score >= mcqQuestions.length / 2 ? "🎉" : "💪"}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
                    <p className="text-muted-foreground mb-6">
                      You scored <span className="text-primary font-bold">{score}</span> out of{" "}
                      <span className="font-bold">{mcqQuestions.length}</span>
                    </p>
                    <div className="w-full bg-secondary rounded-full h-3 mb-6">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(score / mcqQuestions.length) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <Button onClick={resetQuiz} className="gap-2">
                      <RefreshCw className="h-4 w-4" />
                      Try Again
                    </Button>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
