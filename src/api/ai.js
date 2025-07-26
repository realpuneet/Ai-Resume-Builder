// fetch("https://openrouter.ai/api/v1/chat/completions", {
//   method: "POST",
//   headers: {
//     "Authorization": "Bearer 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",
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     "model": "deepseek/deepseek-r1:free",
//     "messages": [
//       {
//         "role": "user",
//         "content": "What is the meaning of life?"
//       }
//     ]
//   })
// });