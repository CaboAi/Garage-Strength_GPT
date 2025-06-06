const express = require("express");

const app = express();
app.use(express.json());

app.post("/update_progress_report", (req, res) => {
  const { current_weight, soreness_level, fatigue_level, diet_consistency } = req.body;

  const starting_weight = 225;
  const weight_lost = starting_weight - current_weight;

  let macro_change = '';
  let workout_note = '';

  if (weight_lost < 1) {
    macro_change = 'Reduce fat by 10g/day and add 5 minutes to cardio.';
  } else if (weight_lost <= 2.5) {
    macro_change = 'Macros are good. Continue as-is.';
  } else {
    macro_change = 'Add 5g carbs post-workout to preserve strength.';
  }

  if (soreness_level > 7 || fatigue_level > 7) {
    workout_note = 'Deload recommended. Reduce volume by 25% this week.';
  } else {
    workout_note = 'Continue with current training load.';
  }

  res.json({
    message: `Weight lost: ${weight_lost} lbs. ${macro_change} ${workout_note}`,
    adjusted_macros: macro_change,
    training_guidance: workout_note
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors()); // ✅ Enable CORS
app.use(express.json());
